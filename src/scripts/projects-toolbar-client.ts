type SortMode = 'date' | 'date-asc'

const SORT_DEFAULT: SortMode = 'date'
const SORT_URL_VALUES: readonly SortMode[] = ['date', 'date-asc']
const CARD_SELECTOR = '[data-project-card]'

function mountProjectsToolbar(root: HTMLElement): () => void {
  const payloadRaw = root.dataset.payload
  if (!payloadRaw) return () => {}

  let projectTypes: string[]
  let projectCounts: Record<string, number>
  try {
    const parsed = JSON.parse(decodeURIComponent(payloadRaw)) as {
      types: string[]
      counts: Record<string, number>
    }
    projectTypes = parsed.types
    projectCounts = parsed.counts
  } catch {
    return () => {}
  }

  let selectedType = 'All'
  let searchQuery = ''
  let sortBy: SortMode = SORT_DEFAULT

  const searchInput = root.querySelector<HTMLInputElement>('#projects-search')
  const sortSelect = root.querySelector<HTMLSelectElement>('#projects-sort')
  const liveRegion = root.querySelector<HTMLElement>(
    '[data-projects-toolbar-announce]',
  )

  function chipButtons(): NodeListOf<HTMLButtonElement> {
    return root.querySelectorAll<HTMLButtonElement>('[data-toolbar-type]')
  }

  function readUrl(): void {
    const params = new URLSearchParams(window.location.search)
    const type = params.get('type')
    const q = params.get('q') ?? ''
    const sort = params.get('sort')
    if (type && projectTypes.includes(type)) {
      selectedType = type
    } else {
      selectedType = 'All'
    }
    searchQuery = q
    if (sort && SORT_URL_VALUES.includes(sort as SortMode)) {
      sortBy = sort as SortMode
    } else {
      sortBy = SORT_DEFAULT
    }
    if (searchInput) searchInput.value = searchQuery
    if (sortSelect) sortSelect.value = sortBy
    updateChipsUi()
  }

  function updateChipsUi(): void {
    for (const btn of chipButtons()) {
      const t = btn.dataset.toolbarType ?? ''
      const active = selectedType === t
      btn.classList.toggle('filter-chip-active', active)
      btn.setAttribute('aria-selected', active ? 'true' : 'false')
    }
  }

  function syncUrl(): void {
    const url = new URL(window.location.href)
    if (selectedType === 'All') {
      url.searchParams.delete('type')
    } else {
      url.searchParams.set('type', selectedType)
    }
    if (!searchQuery.trim()) {
      url.searchParams.delete('q')
    } else {
      url.searchParams.set('q', searchQuery.trim())
    }
    if (sortBy === SORT_DEFAULT) {
      url.searchParams.delete('sort')
    } else {
      url.searchParams.set('sort', sortBy)
    }
    window.history.replaceState(
      {},
      '',
      `${url.pathname}${url.search}${url.hash}`,
    )
  }

  function getCards(): HTMLElement[] {
    return Array.from(document.querySelectorAll<HTMLElement>(CARD_SELECTOR))
  }

  function startTime(el: HTMLElement): number {
    const t = new Date(el.getAttribute('data-sort-date') ?? 0).getTime()
    return Number.isNaN(t) ? 0 : t
  }

  function sortMainGrid(): void {
    const grid = document.getElementById('projects-cards-container')
    if (!grid) return
    const cards = Array.from(grid.querySelectorAll<HTMLElement>(CARD_SELECTOR))
    const visible = cards.filter(c => !c.hasAttribute('hidden'))
    const hidden = cards.filter(c => c.hasAttribute('hidden'))
    visible.sort((a, b) => {
      const da = startTime(a)
      const db = startTime(b)
      if (sortBy === 'date-asc') return da - db
      return db - da
    })
    for (const c of visible) grid.appendChild(c)
    for (const c of hidden) grid.appendChild(c)
  }

  function applyVisibility(): void {
    const cards = getCards()
    const q = searchQuery.trim().toLowerCase()
    let visible = 0
    for (const card of cards) {
      const type = card.getAttribute('data-type') ?? ''
      const blob = (card.getAttribute('data-search') ?? '').toLowerCase()
      const typeOk = selectedType === 'All' || type === selectedType
      const searchOk = !q || blob.includes(q)
      const show = typeOk && searchOk
      // Tailwind utilities like `flex` can override the base `[hidden]{display:none}` rule.
      // Force an actual hide to guarantee filtering works regardless of CSS ordering.
      card.toggleAttribute('hidden', !show)
      if (show) {
        card.style.removeProperty('display')
      } else {
        card.style.display = 'none'
      }
      if (show) visible++
    }
    if (liveRegion) {
      liveRegion.textContent = `${visible} project${visible === 1 ? '' : 's'} shown`
    }
    sortMainGrid()
    syncUrl()
    document.dispatchEvent(
      new CustomEvent('projects-visibility-updated', { bubbles: true }),
    )
  }

  function selectType(t: string): void {
    selectedType = t
    updateChipsUi()
    applyVisibility()
  }

  function onChipClick(e: Event): void {
    const target = e.target as HTMLElement
    const btn = target.closest<HTMLButtonElement>('[data-toolbar-type]')
    if (!btn || !root.contains(btn)) return
    const t = btn.dataset.toolbarType
    if (t) selectType(t)
  }

  function onSearchInput(): void {
    searchQuery = searchInput?.value ?? ''
    applyVisibility()
  }

  function onSortChange(): void {
    const v = sortSelect?.value
    if (v === 'date' || v === 'date-asc') {
      sortBy = v
      applyVisibility()
    }
  }

  function onSlashKey(e: KeyboardEvent): void {
    if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return
    const target = e.target as HTMLElement | null
    if (!target) return
    const tag = target.tagName
    if (tag === 'INPUT' || tag === 'TEXTAREA' || target.isContentEditable)
      return
    e.preventDefault()
    searchInput?.focus()
  }

  root.addEventListener('click', onChipClick)
  searchInput?.addEventListener('input', onSearchInput)
  sortSelect?.addEventListener('change', onSortChange)
  document.addEventListener('keydown', onSlashKey)

  readUrl()
  applyVisibility()

  return () => {
    root.removeEventListener('click', onChipClick)
    searchInput?.removeEventListener('input', onSearchInput)
    sortSelect?.removeEventListener('change', onSortChange)
    document.removeEventListener('keydown', onSlashKey)
  }
}

let toolbarUnmount: (() => void) | null = null

export function setupProjectsToolbar(): void {
  const onPageLoad = (): void => {
    toolbarUnmount?.()
    toolbarUnmount = null
    const root = document.getElementById('projects-toolbar')
    if (!root) return
    toolbarUnmount = mountProjectsToolbar(root)
  }

  document.addEventListener('astro:page-load', onPageLoad)
}

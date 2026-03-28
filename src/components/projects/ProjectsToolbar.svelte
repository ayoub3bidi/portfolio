<script lang="ts">
import Icon from '@iconify/svelte'
import { onMount, tick } from 'svelte'

/** Viewport inset so fixed listbox (shadow/border) is not clipped by overflow ancestors */
const SORT_PANEL_VIEWPORT_EDGE = 12

/**
 * Move node to document.body so position:fixed + getBoundingClientRect() match the viewport.
 * (#content-wrapper uses transform from onload-animation, which breaks fixed positioning.)
 */
function portalToBody(node: HTMLElement): { destroy(): void } {
  const anchor = document.createComment('')
  node.before(anchor)
  document.body.appendChild(node)
  return {
    destroy() {
      anchor.parentNode?.insertBefore(node, anchor)
      anchor.remove()
    },
  }
}

type SortMode = 'date' | 'date-asc'

const SORT_DEFAULT: SortMode = 'date'
const SORT_URL_VALUES: SortMode[] = ['date', 'date-asc']

const SORT_OPTIONS: { value: SortMode; label: string }[] = [
  { value: 'date', label: 'Newest first' },
  { value: 'date-asc', label: 'Oldest first' },
]

interface Props {
  typesJson: string
  countsJson: string
}

const { typesJson, countsJson }: Props = $props()

const projectTypes: string[] = JSON.parse(typesJson) as string[]
const projectCounts: Record<string, number> = JSON.parse(countsJson) as Record<
  string,
  number
>

// biome-ignore lint/style/useConst: Svelte bind:this assigns the element ref
let searchInput: HTMLInputElement | undefined = undefined
// biome-ignore lint/style/useConst: Svelte bind:this assigns the element ref
let sortRoot: HTMLDivElement | undefined = undefined
// biome-ignore lint/style/useConst: Svelte bind:this assigns the element ref
let sortTriggerBtn: HTMLButtonElement | undefined = undefined
// biome-ignore lint/style/useConst: Svelte bind:this assigns the element ref
let sortPanelEl: HTMLDivElement | undefined = undefined

let selectedType = $state('All')
let searchQuery = $state('')
let sortBy = $state<SortMode>(SORT_DEFAULT)
let sortMenuOpen = $state(false)
let announce = $state('')

function sortLabel(mode: SortMode): string {
  return (
    SORT_OPTIONS.find(o => o.value === mode)?.label ?? SORT_OPTIONS[0].label
  )
}

function cardSelector(): string {
  return '[data-project-card]'
}

function getCards(): HTMLElement[] {
  return Array.from(document.querySelectorAll<HTMLElement>(cardSelector()))
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
  window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
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
    card.toggleAttribute('hidden', !show)
    if (show) visible++
  }
  announce = `${visible} project${visible === 1 ? '' : 's'} shown`
  sortMainGrid()
  syncUrl()
  document.dispatchEvent(
    new CustomEvent('projects-visibility-updated', { bubbles: true }),
  )
}

function startTime(el: HTMLElement): number {
  const t = new Date(el.getAttribute('data-sort-date') ?? 0).getTime()
  return Number.isNaN(t) ? 0 : t
}

function sortMainGrid(): void {
  const grid = document.getElementById('projects-cards-container')
  if (!grid) return
  const cards = Array.from(grid.querySelectorAll<HTMLElement>(cardSelector()))
  const visible = cards.filter(c => !c.hasAttribute('hidden'))
  const hidden = cards.filter(c => c.hasAttribute('hidden'))
  visible.sort((a, b) => {
    const da = startTime(a)
    const db = startTime(b)
    if (sortBy === 'date-asc') return da - db
    return db - da
  })
  for (const c of visible) {
    grid.appendChild(c)
  }
  for (const c of hidden) {
    grid.appendChild(c)
  }
}

function selectType(t: string): void {
  selectedType = t
  applyVisibility()
}

function onSearchInput(): void {
  applyVisibility()
}

function selectSort(mode: SortMode): void {
  sortBy = mode
  sortMenuOpen = false
  applyVisibility()
}

function toggleSortMenu(): void {
  sortMenuOpen = !sortMenuOpen
}

function positionSortPanel(): void {
  const btn = sortTriggerBtn
  const panel = sortPanelEl
  if (!btn || !panel) return
  const r = btn.getBoundingClientRect()
  const w = r.width
  const maxLeft = window.innerWidth - w - SORT_PANEL_VIEWPORT_EDGE
  const left = Math.max(SORT_PANEL_VIEWPORT_EDGE, Math.min(r.left, maxLeft))
  panel.style.position = 'fixed'
  panel.style.top = `${Math.round(r.bottom + 6)}px`
  panel.style.left = `${Math.round(left)}px`
  panel.style.width = `${Math.round(w)}px`
  panel.style.zIndex = '200'
}

$effect(() => {
  if (!sortMenuOpen) return

  void tick().then(() => {
    positionSortPanel()
    requestAnimationFrame(() => positionSortPanel())
  })

  const onReflow = (): void => {
    positionSortPanel()
  }
  window.addEventListener('resize', onReflow)
  window.addEventListener('scroll', onReflow, true)

  return () => {
    window.removeEventListener('resize', onReflow)
    window.removeEventListener('scroll', onReflow, true)
  }
})

$effect(() => {
  if (!sortMenuOpen) return

  const onDoc = (e: MouseEvent): void => {
    const t = e.target as Node
    const insideTrigger = sortRoot?.contains(t) ?? false
    const insidePanel = sortPanelEl?.contains(t) ?? false
    if (!insideTrigger && !insidePanel) {
      sortMenuOpen = false
    }
  }

  const id = window.setTimeout(() => {
    document.addEventListener('click', onDoc, true)
  }, 0)

  return () => {
    window.clearTimeout(id)
    document.removeEventListener('click', onDoc, true)
  }
})

$effect(() => {
  if (!sortMenuOpen) return

  const onKey = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      sortMenuOpen = false
    }
  }
  document.addEventListener('keydown', onKey)
  return () => document.removeEventListener('keydown', onKey)
})

onMount(() => {
  const init = (): void => {
    readUrl()
    applyVisibility()
  }
  init()

  const onPageLoad = (): void => {
    readUrl()
    applyVisibility()
  }
  document.addEventListener('astro:page-load', onPageLoad)

  const onKey = (e: KeyboardEvent): void => {
    if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return
    const target = e.target as HTMLElement | null
    if (!target) return
    const tag = target.tagName
    if (tag === 'INPUT' || tag === 'TEXTAREA' || target.isContentEditable)
      return
    e.preventDefault()
    searchInput?.focus()
  }
  document.addEventListener('keydown', onKey)

  return () => {
    document.removeEventListener('astro:page-load', onPageLoad)
    document.removeEventListener('keydown', onKey)
  }
})
</script>

<div class="mb-4 space-y-3 px-2 sm:px-2" id="projects-toolbar">
  <div
    class="flex flex-wrap justify-center gap-1.5 sm:gap-2"
    role="tablist"
    aria-label="Filter by project type"
  >
    {#each projectTypes as t}
      <button
        type="button"
        role="tab"
        aria-selected={selectedType === t}
        class="filter-chip rounded-md border-2 border-solid border-gray-200 bg-[var(--card-bg)] px-2 py-1.5 text-xs text-black transition duration-300 hover:border-[var(--primary)] dark:border-gray-700 dark:text-white dark:hover:border-[var(--primary)] dark:hover:bg-gray-800 sm:px-4 sm:py-2 sm:text-sm"
        class:filter-chip-active={selectedType === t}
        data-type={t}
        onclick={() => selectType(t)}
      >
        <span class="whitespace-nowrap">{t} ({projectCounts[t] ?? 0})</span>
      </button>
    {/each}
  </div>

  <div class="pt-3 sm:pt-4">
    <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-4">
      <div class="flex min-w-0 flex-1 flex-col">
        <label
          for="projects-search"
          class="mb-1 block text-xs font-medium text-neutral-500 dark:text-neutral-400"
        >
          Search projects
        </label>
        <input
          id="projects-search"
          bind:this={searchInput}
          type="search"
          autocomplete="off"
          placeholder="Title, stack, type…"
          class="box-border h-10 w-full rounded-md border-2 border-solid border-gray-200 bg-[var(--card-bg)] px-3 text-sm text-black placeholder:text-neutral-400 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--card-bg)] dark:border-gray-700 dark:text-white dark:focus:ring-offset-gray-900"
          bind:value={searchQuery}
          oninput={onSearchInput}
          role="searchbox"
        />
      </div>
      <div class="flex w-full shrink-0 flex-col sm:w-auto sm:min-w-[13.5rem]">
        <span
          id="projects-sort-label"
          class="mb-1 block text-xs font-medium text-neutral-500 dark:text-neutral-400"
        >
          Sort by start date
        </span>
        <div class="relative" bind:this={sortRoot}>
          <button
            type="button"
            id="projects-sort-trigger"
            bind:this={sortTriggerBtn}
            class="sort-trigger flex h-10 w-full min-w-0 items-center justify-between gap-2 rounded-lg border-2 border-solid border-gray-200 bg-[var(--card-bg)] px-3 text-left text-sm font-medium text-neutral-900 shadow-sm transition-[border-color,box-shadow,transform] duration-200 ease-out hover:border-[var(--primary)]/60 hover:shadow-md focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--card-bg)] active:scale-[0.99] motion-reduce:transition-none motion-reduce:active:scale-100 dark:border-gray-700 dark:text-white dark:focus:ring-offset-gray-900"
            aria-haspopup="listbox"
            aria-expanded={sortMenuOpen}
            aria-controls="projects-sort-listbox"
            aria-labelledby="projects-sort-label"
            onclick={(e) => {
              e.stopPropagation()
              toggleSortMenu()
            }}
          >
            <span class="truncate">{sortLabel(sortBy)}</span>
            <Icon
              icon="fa6-solid:chevron-down"
              class="h-3.5 w-3.5 shrink-0 text-neutral-500 transition-transform duration-200 ease-out motion-reduce:transition-none {sortMenuOpen
                ? 'rotate-180'
                : ''}"
              aria-hidden="true"
            />
          </button>

          {#if sortMenuOpen}
            <div
              id="projects-sort-listbox"
              bind:this={sortPanelEl}
              use:portalToBody
              class="sort-list sort-list-animate overflow-hidden rounded-lg border-2 border-solid border-gray-200 bg-[var(--card-bg)] py-1 shadow-lg ring-1 ring-black/5 motion-reduce:animate-none dark:border-gray-600 dark:ring-white/10"
              role="listbox"
              aria-labelledby="projects-sort-label"
            >
              {#each SORT_OPTIONS as opt}
                <button
                  type="button"
                  role="option"
                  aria-selected={sortBy === opt.value}
                  class="flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm transition-colors duration-150 motion-reduce:transition-none {sortBy ===
                  opt.value
                    ? 'bg-[oklch(0.75_0.14_var(--hue))]/15 font-medium text-[var(--primary)] dark:bg-[oklch(0.75_0.14_var(--hue))]/20'
                    : 'text-neutral-700 hover:bg-gray-100 dark:text-neutral-200 dark:hover:bg-gray-800/80'}"
                  onclick={() => selectSort(opt.value)}
                >
                  <span
                    class="flex h-4 w-4 shrink-0 items-center justify-center text-[var(--primary)] opacity-0 transition-opacity {sortBy ===
                    opt.value
                      ? 'opacity-100'
                      : ''}"
                    aria-hidden="true"
                  >
                    {#if sortBy === opt.value}
                      <Icon icon="fa6-solid:check" class="h-3 w-3" aria-hidden="true" />
                    {/if}
                  </span>
                  <span class="min-w-0 flex-1">{opt.label}</span>
                </button>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <p class="sr-only" aria-live="polite">{announce}</p>
</div>

<style>
  .filter-chip-active {
    background-color: var(--primary);
    border-color: var(--primary);
    color: white;
  }

  @keyframes sort-list-enter {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .sort-list-animate {
    animation: sort-list-enter 0.2s ease-out both;
  }

  @media (prefers-reduced-motion: reduce) {
    .sort-list-animate {
      animation: none;
    }
  }
</style>

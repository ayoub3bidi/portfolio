<script lang="ts">
import { onMount } from 'svelte'

let activeYear = $state<number | null>(null)
let years = $state<number[]>([])
let isVisible = $state(false)

function collectYearsFromVisibleCards(): number[] {
  const set = new Set<number>()
  const cards = document.querySelectorAll<HTMLElement>(
    '[data-project-card]:not([hidden])',
  )
  for (const card of cards) {
    const startDate = card.getAttribute('data-start-date')
    if (startDate) {
      set.add(new Date(startDate).getFullYear())
    }
    const endDate = card.getAttribute('data-end-date')
    if (endDate) {
      set.add(new Date(endDate).getFullYear())
    }
  }
  return Array.from(set).sort((a, b) => b - a)
}

function refreshYears(): void {
  years = collectYearsFromVisibleCards()
  isVisible = years.length > 0
}

onMount(() => {
  let observer: IntersectionObserver | null = null

  function observeVisibleCards(): void {
    if (observer) {
      observer.disconnect()
    }
    observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const card = entry.target as HTMLElement
            if (card.hasAttribute('hidden')) continue
            const startDate = card.getAttribute('data-start-date')
            if (startDate) {
              activeYear = new Date(startDate).getFullYear()
            }
          }
        }
      },
      {
        threshold: [0.5],
        rootMargin: '-20% 0px -20% 0px',
      },
    )

    const cards = document.querySelectorAll<HTMLElement>(
      '[data-project-card]:not([hidden])',
    )
    for (const card of cards) {
      observer.observe(card)
    }
  }

  function onVisibilityUpdated(): void {
    refreshYears()
    observeVisibleCards()
  }

  refreshYears()
  observeVisibleCards()

  document.addEventListener('projects-visibility-updated', onVisibilityUpdated)

  const onPageLoad = (): void => {
    onVisibilityUpdated()
  }
  document.addEventListener('astro:page-load', onPageLoad)

  return () => {
    document.removeEventListener(
      'projects-visibility-updated',
      onVisibilityUpdated,
    )
    document.removeEventListener('astro:page-load', onPageLoad)
    observer?.disconnect()
  }
})

function scrollToYear(year: number): void {
  const projectCards = Array.from(
    document.querySelectorAll<HTMLElement>('[data-project-card]:not([hidden])'),
  )
  const targetCard = projectCards.find(card => {
    const startDate = card.getAttribute('data-start-date')
    if (startDate) {
      const cardYear = new Date(startDate).getFullYear()
      return cardYear === year
    }
    return false
  })

  if (targetCard) {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    targetCard.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'center',
    })
  }
}
</script>

<div
  class="timeline-sidebar fixed right-4 md:right-8 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-4 transition-opacity duration-300 motion-reduce:transition-none"
  class:opacity-0={!isVisible}
  class:pointer-events-none={!isVisible}
  aria-hidden={!isVisible}
>
  {#each years as year}
    <button
      type="button"
      class="timeline-year group relative flex items-center justify-end transition-all duration-300 motion-reduce:transition-none"
      class:active={activeYear === year}
      onclick={() => scrollToYear(year)}
      aria-label={`Scroll to year ${year}`}
    >
      <span
        class="year-label absolute right-10 whitespace-nowrap text-sm font-medium text-neutral-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-neutral-400 motion-reduce:transition-none"
      >
        {year}
      </span>
      <div
        class="year-dot h-3 w-3 rounded-full border-2 border-neutral-400 transition-all duration-300 group-hover:h-4 group-hover:w-4 group-hover:border-[var(--primary)] dark:border-neutral-600 motion-reduce:transition-none"
        class:active-dot={activeYear === year}
      ></div>
    </button>
  {/each}
</div>

<style>
  .timeline-year.active .year-label {
    opacity: 1;
    color: var(--primary);
  }

  .year-dot.active-dot {
    background-color: var(--primary);
    border-color: var(--primary);
    width: 1rem;
    height: 1rem;
    box-shadow: 0 0 0 4px color-mix(in oklch, var(--primary) 15%, transparent);
  }

  .timeline-year {
    cursor: pointer;
  }

  .timeline-year:hover .year-dot {
    transform: scale(1.1);
  }

  @media (prefers-reduced-motion: reduce) {
    .timeline-year:hover .year-dot {
      transform: none;
    }
  }
</style>

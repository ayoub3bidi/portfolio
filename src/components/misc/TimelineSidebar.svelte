<script lang="ts">
import { onMount } from 'svelte'

interface Project {
  startDate: string
  endDate: string
}

interface Props {
  projects: Project[]
}

const { projects }: Props = $props()

let activeYear = $state<number | null>(null)
let years = $state<number[]>([])
let isVisible = $state(true)

onMount(() => {
  // Extract unique years from projects
  const yearSet = new Set<number>()
  for (const project of projects) {
    const startYear = new Date(project.startDate).getFullYear()
    yearSet.add(startYear)

    if (project.endDate) {
      const endYear = new Date(project.endDate).getFullYear()
      yearSet.add(endYear)
    }
  }

  years = Array.from(yearSet).sort((a, b) => b - a)

  // Set up Intersection Observer for project cards
  const projectCards = document.querySelectorAll('.project-card')
  const observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const card = entry.target as HTMLElement
          // Only update if the card is visible (not filtered out)
          if (card.style.display !== 'none') {
            const startDate = card.getAttribute('data-start-date')

            if (startDate) {
              const year = new Date(startDate).getFullYear()
              activeYear = year
            }
          }
        }
      }
    },
    {
      threshold: [0.5],
      rootMargin: '-20% 0px -20% 0px',
    },
  )

  for (const card of projectCards) {
    observer.observe(card)
  }

  // Listen for filter changes to show/hide timeline
  const handleFilterChange = (e: Event) => {
    const button = e.target as HTMLElement
    const filterType = button.getAttribute('data-type')
    isVisible = filterType === 'All'
  }

  const filterButtons = document.querySelectorAll('.filter-btn')
  for (const btn of filterButtons) {
    btn.addEventListener('click', handleFilterChange)
  }

  return () => {
    observer.disconnect()
    for (const btn of filterButtons) {
      btn.removeEventListener('click', handleFilterChange)
    }
  }
})

function scrollToYear(year: number) {
  const projectCards = Array.from(document.querySelectorAll('.project-card'))
  // Find first visible card with matching year
  const targetCard = projectCards.find(card => {
    const element = card as HTMLElement
    // Skip hidden cards (filtered out)
    if (element.style.display === 'none') return false

    const startDate = element.getAttribute('data-start-date')
    if (startDate) {
      const cardYear = new Date(startDate).getFullYear()
      return cardYear === year
    }
    return false
  })

  if (targetCard) {
    ;(targetCard as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }
}
</script>

<div 
  class="timeline-sidebar fixed right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50 transition-opacity duration-300"
  class:opacity-0={!isVisible}
  class:pointer-events-none={!isVisible}
>
  {#each years as year}
    <button
      class="timeline-year group relative flex items-center justify-end transition-all duration-300"
      class:active={activeYear === year}
      onclick={() => scrollToYear(year)}
      aria-label={`Scroll to year ${year}`}
    >
      <span 
        class="year-label absolute right-10 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neutral-600 dark:text-neutral-400 whitespace-nowrap"
      >
        {year}
      </span>
      <div 
        class="year-dot w-3 h-3 rounded-full border-2 border-neutral-400 dark:border-neutral-600 transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-[var(--primary)]"
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
    box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.1);
  }

  .timeline-year {
    cursor: pointer;
  }

  .timeline-year:hover .year-dot {
    transform: scale(1.1);
  }
</style>

<script lang="ts">
  import ANNOUNCEMENTS from '@constants/announcements'
  import {
    ANNOUNCEMENT_HEIGHT_PX,
    coerceForcedIdFromQuery,
    pickActive,
  } from '@utils/announcement'
  import { onMount } from 'svelte'

  type Active = {
    id: string
    message: string
    href?: string
  }

  let active: Active | null = null
  let visible = false
  let timer: ReturnType<typeof setTimeout> | null = null

  function storageKey(id: string) {
    return `announcement:dismissed:${id}`
  }

  function isDismissed(id: string): boolean {
    try {
      return localStorage.getItem(storageKey(id)) === '1'
    } catch {
      return false
    }
  }

  function show(a: Active) {
    active = a
    visible = true
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      // auto-hide without persisting dismissal
      hide(false)
    }, 30_000)
  }

  function hide(persist: boolean) {
    if (!active) return
    visible = false
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    if (persist) {
      try {
        localStorage.setItem(storageKey(active.id), '1')
      } catch {}
    }
  }

  function tryInit() {
    const forcedId = coerceForcedIdFromQuery()
    if (forcedId) {
      const forced = ANNOUNCEMENTS.find((a) => a.id === forcedId)
      if (forced && !isDismissed(forced.id)) {
        show({ id: forced.id, message: forced.message, href: forced.href })
        return
      }
    }

    const pick = pickActive(ANNOUNCEMENTS)
    if (pick && !isDismissed(pick.id)) {
      show({ id: pick.id, message: pick.message, href: pick.href })
    }
  }

  onMount(() => {
    tryInit()
    return () => {
      if (timer) clearTimeout(timer)
    }
  })
</script>

{#if visible && active}
  <div
    role="region"
    aria-label="Site announcement"
    class="sticky top-0 left-0 w-full z-[9999]"
    style={`height:${ANNOUNCEMENT_HEIGHT_PX}px`}
  >
    <div class="text-sm h-full px-3 flex items-center justify-center shadow-md bg-[oklch(0.30_0.02_var(--hue))] text-white/90">
      {#if active.href}
        <a
          href={active.href}
          class="link-underline transition font-medium hover:text-[oklch(0.85_0.14_var(--hue))] focus-visible:outline-none"
          rel="noopener noreferrer"
          target="_blank"
        >
          {active.message}
        </a>
      {:else}
        <span>{active.message}</span>
      {/if}
      <button
        class="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
        aria-label="Close announcement"
        title="Close"
        on:click={() => hide(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
          <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 1 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
{/if}

<style>
/* No global shifting, just sticky top banner at very top in flow. */
</style>


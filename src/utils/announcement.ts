import type { Announcement } from '@constants/announcements'

export const ANNOUNCEMENT_HEIGHT_PX = 44

export function parseISODateToMidnightLocal(dateStr: string): Date {
  const [y, m, d] = dateStr.split('-').map((v) => Number(v))
  return new Date(y, m - 1, d, 0, 0, 0, 0)
}

export function endOfDay(dateStr: string): Date {
  const [y, m, d] = dateStr.split('-').map((v) => Number(v))
  return new Date(y, m - 1, d, 23, 59, 59, 999)
}

export function isNowWithin(announcement: Announcement, now = new Date()): boolean {
  const start = parseISODateToMidnightLocal(announcement.startDate)
  const end = endOfDay(announcement.endDate)
  return now.getTime() >= start.getTime() && now.getTime() <= end.getTime()
}

export function pickActive(announcements: Announcement[], now = new Date()): Announcement | null {
  const matches = announcements.filter((a) => isNowWithin(a, now))
  if (matches.length === 0) return null
  matches.sort((a, b) => (a.startDate < b.startDate ? -1 : a.startDate > b.startDate ? 1 : 0))
  return matches[0]
}

export function coerceForcedIdFromQuery(): string | null {
  if (typeof window === 'undefined') return null
  const url = new URL(window.location.href)
  const forced = url.searchParams.get('showAnnouncement')
  return forced && forced.trim() !== '' ? forced : null
}

export function markBodyWithAnnouncementHeight() {
  if (typeof document === 'undefined') return
  document.documentElement.style.setProperty('--announcement-height', `${ANNOUNCEMENT_HEIGHT_PX}px`)
  document.documentElement.classList.add('has-announcement')
}

export function clearBodyAnnouncementHeight() {
  if (typeof document === 'undefined') return
  document.documentElement.classList.remove('has-announcement')
  document.documentElement.style.removeProperty('--announcement-height')
}



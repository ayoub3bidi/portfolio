import type { Project } from '../types/project'

/** GitHub usernames whose repos count as “mine” on OSS cards (lowercase). */
export const OSS_OWN_GITHUB_USERS = ['ayoub3bidi'] as const

const GITHUB_PR_PATH = /github\.com\/[^/]+\/[^/]+\/pull\/\d/i

const MONTHS = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
] as const

export function parseProjectDate(iso: string): number {
  if (!iso) return 0
  const t = new Date(iso).getTime()
  return Number.isNaN(t) ? 0 : t
}

function monthAbbrYear(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`
}

/** e.g. `NOV 2025 – PRESENT` or `OCT 2025 – NOV 2025` */
export function formatProjectDateRange(project: Project): string {
  const hasEnd = Boolean(project.endDate?.trim())
  const hasStart = Boolean(project.startDate?.trim())

  if (!hasStart) {
    if (hasEnd) return monthAbbrYear(project.endDate)
    return ''
  }

  const start = monthAbbrYear(project.startDate)
  if (!start) return ''

  if (!hasEnd) return `${start} – PRESENT`

  const end = monthAbbrYear(project.endDate)
  if (!end) return `${start} – PRESENT`
  if (end === start) return start
  return `${start} – ${end}`
}

export function startYear(project: Project): number {
  if (!project.startDate) return 0
  return new Date(project.startDate).getFullYear()
}

export function projectId(project: Project, index: number): string {
  return `p-${index}`
}

export type OpenSourceKind = 'pull-request' | 'own-repo' | 'other-repo'

/**
 * For `Open-source` entries only: PR links vs your GitHub repos vs other repo links.
 * Heuristic: `/pull/` → contribution; `github.com/<you>/` → yours; else collaboration.
 */
export function getOpenSourceKind(project: Project): OpenSourceKind | null {
  if (project.type !== 'Open-source') return null
  const repo = project.repo?.trim() ?? ''
  if (!repo) return null
  if (GITHUB_PR_PATH.test(repo)) return 'pull-request'
  const lower = repo.toLowerCase()
  for (const user of OSS_OWN_GITHUB_USERS) {
    if (lower.includes(`github.com/${user}/`)) return 'own-repo'
  }
  return 'other-repo'
}

export function buildSearchBlob(project: Project): string {
  const parts = [
    project.title,
    project.description,
    project.type,
    ...(project.role ? [project.role] : []),
    ...(project.impact ? [project.impact] : []),
    ...(project.highlights ?? []),
    ...project.techStack,
  ]
  const ossKind = getOpenSourceKind(project)
  if (ossKind === 'pull-request') {
    parts.push('pull request', 'pr', 'contribution', 'upstream')
  } else if (ossKind === 'own-repo') {
    parts.push('my repository', 'maintainer', 'author')
  } else if (ossKind === 'other-repo') {
    parts.push('collaboration', 'community', 'repository')
  }
  return parts.join(' ').toLowerCase()
}

export function sortProjectsForPage(projects: Project[]): Project[] {
  return [...projects].sort(
    (a, b) => parseProjectDate(b.startDate) - parseProjectDate(a.startDate),
  )
}

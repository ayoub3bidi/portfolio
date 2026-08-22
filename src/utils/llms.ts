import { getCollection } from 'astro:content'
import { profileConfig, siteConfig } from '@/config'
import experienceData from '@constants/experience'
import projectsData from '@constants/projects'

export const SITE_URL: string = import.meta.env.SITE ?? 'https://ayoub3bidi.me'

export type PostSummary = {
  title: string
  slug: string
  url: string
  description: string
  published: Date
  tags: string[]
  category: string
}

export async function getPublishedPosts(): Promise<PostSummary[]> {
  const posts = await getCollection('posts', ({ data }) => data.draft !== true)
  return posts
    .map(p => ({
      title: p.data.title,
      slug: p.slug,
      url: new URL(`posts/${p.slug}/`, SITE_URL).href,
      description: p.data.description || '',
      published: p.data.published,
      tags: p.data.tags || [],
      category: p.data.category || '',
    }))
    .sort((a, b) => b.published.getTime() - a.published.getTime())
}

export function siteHeader(): string {
  const links = profileConfig.links.map(l => `- ${l.name}: ${l.url}`).join('\n')
  return [
    `# ${profileConfig.name}`,
    '',
    `> ${siteConfig.title} — ${siteConfig.subtitle}. ${siteConfig.description}`,
    '',
    `Open to opportunities: ${profileConfig.openToOpportunities ? 'yes' : 'no'}`,
    '',
    '## Contact',
    links,
  ].join('\n')
}

export function projectLine(
  p: (typeof projectsData)[number],
  siteUrl: string,
): string {
  const link = p.href || p.repo
  const url = link ? new URL(link, siteUrl).href : ''
  const bits: string[] = []
  if (p.role) bits.push(p.role)
  if (!p.role && p.type) bits.push(p.type)
  const meta = bits.length > 0 ? ` (${bits.join(', ')})` : ''
  const desc = p.description.replace(/\s+/g, ' ').trim()
  return url
    ? `- [${p.title}](${url}): ${desc}${meta}`
    : `- ${p.title}: ${desc}${meta}`
}

export function projectSection(siteUrl: string, full = false): string {
  const lines = [`## Projects (${projectsData.length})`, '']
  for (const p of projectsData) {
    lines.push(projectLine(p, siteUrl))
    if (full) {
      if (p.impact) lines.push(`  Impact: ${p.impact}`)
      if (p.highlights) {
        for (const h of p.highlights) lines.push(`  - ${h}`)
      }
      if (p.techStack?.length) lines.push(`  Stack: ${p.techStack.join(', ')}`)
      const period = [p.startDate, p.endDate].filter(Boolean).join(' → ')
      if (period) lines.push(`  Period: ${period}`)
      lines.push('')
    }
  }
  return lines.join('\n')
}

export function experienceSection(full = false): string {
  const lines = ['## Experience', '']
  for (const e of experienceData) {
    lines.push(`### ${e.title} — ${e.company} (${e.range}, ${e.location})`)
    if (e.url) lines.push(`Company: ${e.url}`)
    if (full) {
      lines.push('')
      for (const t of e.texts) lines.push(`- ${t}`)
      if (e.stack?.length) lines.push(`\nStack: ${e.stack.join(', ')}`)
    }
    lines.push('')
  }
  return lines.join('\n')
}

export function postsSection(posts: PostSummary[], full = false): string {
  const lines = [`## Writing (${posts.length} posts)`, '']
  for (const p of posts) {
    const desc = p.description ? `: ${p.description}` : ''
    lines.push(
      `- [${p.title}](${p.url}) — ${p.published.toISOString().slice(0, 10)}${desc}`,
    )
    if (full && p.tags.length) lines.push(`  Tags: ${p.tags.join(', ')}`)
  }
  return lines.join('\n')
}

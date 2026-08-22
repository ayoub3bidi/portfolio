import { siteConfig } from '@/config'
import {
  SITE_URL,
  getPublishedPosts,
  postsSection,
  projectSection,
  siteHeader,
} from '@utils/llms'
import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  const posts = await getPublishedPosts()
  const featured = [
    'DeepFlows.ai',
    'Bayan Flow',
    'Comwork Cloud MCP',
    'Sun',
    'boschglobal/dse.sdp',
  ]
  const slogan = siteConfig.banner.slogan.enable
    ? [siteConfig.banner.slogan.text, '']
    : []
  const body = [
    siteHeader(),
    '',
    '## Overview',
    '',
    ...slogan,
    'Full-stack developer focused on Go, Python (FastAPI), and React/TypeScript.',
    'Strong open-source contribution record across enterprise projects (Bosch, Deutsche Telekom, Zalando, Criteo, OVHcloud, Airbus).',
    '',
    '## Featured projects',
    ...projectSection(SITE_URL)
      .split('\n')
      .filter(l => featured.some(f => l.includes(f))),
    '',
    '## Recent writing',
    ...postsSection(posts.slice(0, 10))
      .split('\n')
      .filter(l => l.startsWith('- ')),
    '',
    '## Navigate',
    '',
    `- [About](${new URL('about.md', SITE_URL).href})`,
    `- [Projects](${new URL('projects.md', SITE_URL).href})`,
    `- [Experience](${new URL('experience.md', SITE_URL).href})`,
    `- [Collaboration](${new URL('collaboration.md', SITE_URL).href})`,
    `- [All writing](${new URL('posts.md', SITE_URL).href})`,
    `- [Full content export](${new URL('llms-full.txt', SITE_URL).href})`,
    '',
  ].join('\n')

  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}

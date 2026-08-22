import {
  SITE_URL,
  experienceSection,
  getPublishedPosts,
  postsSection,
  projectSection,
  siteHeader,
} from '@utils/llms'
import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  const posts = await getPublishedPosts()
  const body = [
    siteHeader(),
    '',
    'The rest of this site is also available as Markdown:',
    '',
    `- [Home](${new URL('index.md', SITE_URL).href}): overview and navigation`,
    `- [About](${new URL('about.md', SITE_URL).href}): background, values, tech stack`,
    `- [Projects](${new URL('projects.md', SITE_URL).href}): full portfolio with stack and impact`,
    `- [Experience](${new URL('experience.md', SITE_URL).href}): work history`,
    `- [Collaboration](${new URL('collaboration.md', SITE_URL).href}): ways of working together`,
    `- [Writing](${new URL('posts.md', SITE_URL).href}): index of all blog posts`,
    '',
    'This file follows the llms.txt convention (https://llmstxt.org).',
    '',
    projectSection(SITE_URL),
    '',
    experienceSection(),
    '',
    postsSection(posts),
    '',
  ].join('\n')

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}

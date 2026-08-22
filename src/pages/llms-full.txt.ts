import { getEntry } from 'astro:content'
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
  const about = await getEntry('spec', 'about')
  const aboutBody = (about?.body ?? '').trim()

  const body = [
    siteHeader(),
    '',
    '# About',
    '',
    aboutBody,
    '',
    projectSection(SITE_URL, true),
    '',
    experienceSection(true),
    '',
    postsSection(posts, true),
    '',
  ].join('\n')

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}

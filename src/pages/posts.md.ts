import {
  SITE_URL,
  getPublishedPosts,
  postsSection,
  siteHeader,
} from '@utils/llms'
import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  const posts = await getPublishedPosts()
  const body = [
    siteHeader(),
    '',
    postsSection(posts, true),
    '',
    `Each post is also available as raw Markdown at ${SITE_URL}/posts/<post-slug>.md`,
    '',
  ].join('\n')

  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}

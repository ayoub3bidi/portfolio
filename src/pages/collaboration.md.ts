import { getEntry } from 'astro:content'
import { siteHeader } from '@utils/llms'
import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  const collab = await getEntry('spec', 'collaboration')
  const body = [siteHeader(), '', (collab?.body ?? '').trim(), ''].join('\n')

  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}

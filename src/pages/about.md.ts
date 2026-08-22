import { getEntry } from 'astro:content'
import { siteHeader } from '@utils/llms'
import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  const about = await getEntry('spec', 'about')
  const body = [siteHeader(), '', (about?.body ?? '').trim(), ''].join('\n')

  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}

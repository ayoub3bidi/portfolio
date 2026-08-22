import { experienceSection, siteHeader } from '@utils/llms'
import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  const body = [siteHeader(), '', experienceSection(true), ''].join('\n')

  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}

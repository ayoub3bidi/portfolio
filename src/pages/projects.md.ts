import { SITE_URL, projectSection, siteHeader } from '@utils/llms'
import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  const body = [
    siteHeader(),
    '',
    'Full portfolio. Types: Open-source, Comwork.io, Byrsa Labs, Freelance, My Products, Academic.',
    '',
    projectSection(SITE_URL, true),
    '',
  ].join('\n')

  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}

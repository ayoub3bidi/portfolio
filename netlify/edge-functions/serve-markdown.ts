import type { Config, Context } from '@netlify/edge-functions'

// Paths that have a generated markdown twin (mirrors Layout.astro mdPaths)
const MD_PATHS = new Set([
  '/',
  '/about/',
  '/projects/',
  '/experience/',
  '/collaboration/',
])

const POSTS_PREFIX = '/posts/'

function markdownTwinFor(pathname: string): string | undefined {
  if (MD_PATHS.has(pathname)) {
    return pathname === '/' ? '/index.md' : `${pathname.replace(/\/$/, '')}.md`
  }
  if (
    pathname.startsWith(POSTS_PREFIX) &&
    pathname.endsWith('/') &&
    pathname !== POSTS_PREFIX
  ) {
    return `${pathname.replace(/\/$/, '')}.md`
  }
  return undefined
}

export default async (
  request: Request,
  context: Context,
): Promise<Response> => {
  const accept = request.headers.get('accept')
  if (!accept || !accept.includes('text/markdown')) {
    return context.next()
  }

  const { pathname } = new URL(request.url)
  const mdPath = markdownTwinFor(pathname)
  if (!mdPath) {
    return context.next()
  }

  const response = await context.rewrite(mdPath)
  if (!response.ok) {
    return response
  }

  const body = await response.text()
  const tokens = Math.ceil(body.length / 4)

  return new Response(body, {
    status: response.status,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'x-markdown-tokens': String(tokens),
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      Vary: 'Accept',
    },
  })
}

export const config: Config = { path: '/*' }

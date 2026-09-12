interface Env {
  ASSETS: {
    fetch(input: Request | URL, init?: RequestInit): Promise<Response>
  }
}

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
    return pathname === '/' ? '/index.md' : pathname.replace(/\/$/, '') + '.md'
  }
  if (
    pathname.startsWith(POSTS_PREFIX) &&
    pathname.endsWith('/') &&
    pathname !== POSTS_PREFIX
  ) {
    return pathname.replace(/\/$/, '') + '.md'
  }
  return undefined
}

const SECURITY_HEADERS: Readonly<Record<string, string>> = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'no-referrer-when-downgrade',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Permissions-Policy':
    'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  Link: '</llms.txt>; rel="describedby", </rss.xml>; rel="alternate"; type="application/rss+xml"',
}

const cacheControlFor = (pathname: string): string => {
  if (pathname.startsWith('/_astro/')) {
    return 'public, max-age=31536000, immutable'
  }
  if (pathname.startsWith('/favicon/') || pathname.startsWith('/og/')) {
    return 'public, max-age=604800'
  }
  if (/\/llms.*\.txt$/.test(pathname) || pathname.endsWith('.md')) {
    return 'public, max-age=3600, stale-while-revalidate=86400'
  }
  return 'public, max-age=0, must-revalidate'
}

function withHeaders(response: Response, pathname: string): Response {
  const headers = new Headers(response.headers)
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(name, value)
  }
  headers.set('Cache-Control', cacheControlFor(pathname))
  return new Response(response.body, {
    status: response.status,
    headers,
  })
}

const handler: { fetch(request: Request, env: Env): Promise<Response> } = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    const accept = request.headers.get('accept') ?? ''

    if (accept.includes('text/markdown')) {
      const twin = markdownTwinFor(url.pathname)
      if (twin) {
        const response = await env.ASSETS.fetch(new URL(twin, url))
        if (response.ok) {
          const body = await response.text()
          const tokens = Math.ceil(body.length / 4)
          return new Response(body, {
            status: 200,
            headers: {
              'Content-Type': 'text/markdown; charset=utf-8',
              'x-markdown-tokens': String(tokens),
              'Cache-Control':
                'public, max-age=3600, stale-while-revalidate=86400',
              Vary: 'Accept',
            },
          })
        }
      }
    }

    const asset = await env.ASSETS.fetch(request)
    return withHeaders(asset, url.pathname)
  },
}

export default handler
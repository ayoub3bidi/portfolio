import { getCollection } from 'astro:content'
import type { CollectionEntry } from 'astro:content'
import { profileConfig } from '@/config'
import { SITE_URL } from '@utils/llms'
import type { APIRoute } from 'astro'

type Props = { entry: CollectionEntry<'posts'> }

export async function getStaticPaths(): Promise<
  Array<{ params: { slug: string }; props: Props }>
> {
  const posts = await getCollection('posts', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true
  })
  return posts.map(entry => ({
    params: { slug: entry.slug },
    props: { entry },
  }))
}

export const GET: APIRoute = ({ props }) => {
  const { data, body, slug } = (props as Props).entry
  const meta = [
    `Title: ${data.title}`,
    `Published: ${data.published.toISOString().slice(0, 10)}`,
    data.updated ? `Updated: ${data.updated.toISOString().slice(0, 10)}` : null,
    data.category ? `Category: ${data.category}` : null,
    data.tags?.length ? `Tags: ${data.tags.join(', ')}` : null,
    `Author: ${profileConfig.name}`,
    `URL: ${new URL(`posts/${slug}/`, SITE_URL).href}`,
  ]
    .filter(Boolean)
    .join('\n')

  return new Response(`${meta}\n\n---\n\n${body.trim()}\n`, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}

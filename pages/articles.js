import { PageSEO } from '@/components/SEO'
import articlesData from '@/data/articlesData'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'

export default function Blog() {
  return (
    <>
      <PageSEO
        title={`Articles - ${siteMetadata.author}`}
        description={`${siteMetadata.description}`}
      />
      <ListLayout posts={articlesData} />
    </>
  )
}

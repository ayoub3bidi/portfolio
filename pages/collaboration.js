import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import CollaborationLayout from '@/layouts/CollaborationLayout'

export default function Blog() {
  return (
    <>
      <PageSEO
        title={`Modes of collaboration - ${siteMetadata.author}`}
        description={`${siteMetadata.description}`}
      />
      <CollaborationLayout />
    </>
  )
}

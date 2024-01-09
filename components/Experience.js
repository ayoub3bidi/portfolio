import Link from '@/components/Link'

const Experience = ({ title, company, location, range, url, texts}) => {
  return (
    <div className="my-3">
      <div className="flex flex-row text-xl">
        <span className="text-gray-500 dark:text-gray-400">{title}</span>{' '}
        <span className="text-gray-500 dark:text-gray-400">&nbsp;@&nbsp;</span>{' '}
        <span className="text-primary-color-500">
          <Link href={url} className="company">
            {company}
          </Link>
        </span>
      </div>
      <div>
        <div className="p-1 font-mono text-sm text-gray-400 dark:text-gray-600">{range}</div>
        <div className="p-2">
          {
            texts.map((text, index) => (
              <div className="flex flex-row ">
                <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
                <div className="text-gray-500 dark:text-gray-400">{text}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Experience

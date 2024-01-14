import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import Experience from '@/components/Experience'
import experienceData from '@/data/experienceData'
import { RoughNotation } from 'react-rough-notation'

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
    text1,
    text2,
    text3,
  } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`A little trivia me`} />
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 md:pl-16">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8 xl:sticky xl:top-0">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full xl:rounded-full"
              placeholder="blur"
              blurDataURL="/static/images/SVG-placeholder.png"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">@ {company}</div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <p>
              <RoughNotation
                type="bracket"
                brackets={['left', 'right']}
                show={true}
                color="#FF0000"
                animationDelay={300}
                animationDuration={3000}
              >
                {text1}{' '}
                <Link
                  href={'https://www.githubtunisia.tn'}
                  className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                >
                  GitHub's Tunisian Community
                </Link>
                .
              </RoughNotation>
            </p>
            <p className="sm:block md:hidden lg:hidden">
              I am always looking to learn new things (especially stuff related to
              <span className="font-semibold"> Open source</span>
              ),
              {/* , and{' '}
              <RoughNotation
                type="underline"
                show={true}
                color="#FBCFE8"
                animationDelay={1500}
                animationDuration={3000}
                multiline={true}
              >
                actively on the lookout for remote internships which I can pursue in field of Data
                Science.
              </RoughNotation> */}
            </p>
            <p className="hidden md:block">
              I am always looking to learn new things (especially stuff related to{' '}
              <RoughNotation
                animationDelay="1000"
                animationDuration="3000"
                type="highlight"
                color="#0ea4e9"
                strokeWidth="3"
                show={true}
              >
                <span className="text-black dark:text-white">Open source</span>
              </RoughNotation>
              ).
              {/* and{' '}
              <RoughNotation
                type="underline"
                show={true}
                color="#FBCFE8"
                animationDelay={1500}
                animationDuration={3000}
                multiline={true}
              >
                actively on the lookout for a remote job to be a Digital Nomad.
              </RoughNotation> */}
            </p>
            {text2}
            <p>
              <div className="flex flex-row">
                <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
                <span className="mr-2">
                  <Link
                    href={'/technologies'}
                    className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                  >
                    Here
                  </Link>
                </span>{' '}
                you can see technologies I used / am using.
              </div>
              <div className="flex flex-row">
                <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
                <span className="mr-2">
                  <Link
                    href={`https://ayoub3bidi.notion.site/VS-Code-Extensions-1bd165eaf39d4f6cb8ad0e8091937757`}
                    className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                  >
                    Here
                  </Link>
                </span>{' '}
                you can see the VS code extensions I installed.
              </div>
              <div className="flex flex-row">
                <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
                <span className="mr-2">
                  <Link
                    href={'/contact'}
                    className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                  >
                    Here
                  </Link>
                </span>{' '}
                is how you can reach me.
              </div>
              <div className="flex flex-row">
                <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
                <span className="mr-2">
                  <Link
                    href={'/collaboration'}
                    className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                  >
                    Here
                  </Link>
                </span>{' '}
                is how we can collaborate.
              </div>
            </p>
            <br />
          </div>
        </div>
        <br />
        <div className="mt-10 md:pl-16">
          <div className="space-y-2 pt-6 pb-5 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Work Experience
            </h1>
          </div>
          <div className="max-w-none pt-8 pb-8 xl:col-span-2">
            {experienceData.map((d) => (
              <Experience
                key={d.company}
                title={d.title}
                company={d.company}
                location={d.location}
                range={d.range}
                url={d.url}
                texts={d.texts}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

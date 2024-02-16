import Link from '@/components/Link'

const CollaborationLayout = () => (
  <>
    <div className="mx-auto max-w-6xl divide-y divide-gray-400">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Modes of collaboration
        </h1>
        <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
          Want to collaborate? no problem at all! I'm open to new projects and opportunities. Feel
          free to book a meeting with me to discuss your project on
          <Link
            href="https://calendly.com/ayoub3bidi/intro-call"
            className="text-primary-500 hover:underline dark:text-primary-400"
          >
            <span> calendly</span>
          </Link>
          . Here are the different modes of collaboration available:
        </p>
      </div>
      <ul>
        <li className="pt-5">
          <article className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-3">
            <div className="space-y-5 xl:col-span-4">
              <div className="space-y-1">
                <div>
                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    <p className="text-gray-900 transition duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500">
                      Project Mode
                    </p>
                    <p className="text-md pt-2 leading-7 text-gray-500 dark:text-gray-400">
                      We will broke down your project into modules with price and delivery times.
                    </p>
                  </h2>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="pt-2">
          <article className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-3">
            <div className="space-y-5 xl:col-span-4">
              <div className="space-y-1">
                <div>
                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    <p className="text-gray-900 transition duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500">
                      Service Mode
                    </p>
                    <p className="text-md pt-2 leading-7 text-gray-500 dark:text-gray-400">
                      I will estimate your requested tasks (measured in "man-days") according to its
                      complexity.
                    </p>
                  </h2>
                </div>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </>
)

export default CollaborationLayout

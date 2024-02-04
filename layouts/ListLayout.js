/* eslint-disable prettier/prettier */
import Link from '@/components/Link'

const ListLayout = ({ posts }) => (
  <>
    <div className="mx-auto max-w-6xl divide-y divide-gray-400">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Articles
        </h1>
        <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
          A list of articles I published on DEV, LinkedIn, Hashnode, Medium and Hackernoon.
        </p>
      </div>
      <ul>
        {!posts.length && 'No posts found.'}
        {posts.map((post, index) => {
          return (
            <Link
              key={index}
              href={post.link}
              className="group flex bg-transparent bg-opacity-20 px-2 transition duration-100 hover:scale-105 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <li className="py-6">
                <article className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-3">
                  <div className="space-y-5 xl:col-span-4">
                    <div className="space-y-1">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link
                            href={post.link}
                            className="text-gray-900 transition duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500"
                          >
                          #{posts.length - index} {post.title}
                          </Link>
                        </h2>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  </>
)

export default ListLayout

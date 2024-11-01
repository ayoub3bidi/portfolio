'use client'
import React, { useEffect, useId, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useOutsideClick } from '../hooks/use-outside-click'
import siteMetadata from '@/data/siteMetadata'
import podcastsData from '@/data/podcastsData'
import { PageSEO } from '@/components/SEO'

// Close Icon Component
const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  )
}

export default function Podcasts() {
  const [active, setActive] = useState(null)
  const ref = useRef(null)
  const id = useRef(Math.random().toString(36).substring(2, 15)).current

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setActive(null)
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active])

  useOutsideClick(ref, () => setActive(null))

  return (
    <>
      <PageSEO
        title={`Podcasts - ${siteMetadata.author}`}
        description="A list of Podcasts I've been part of."
      />

      {/* Backdrop */}
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/20"
          />
        )}
      </AnimatePresence>

      {/* Expanded Card Modal */}
      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white lg:hidden"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="flex h-full w-full max-w-[500px] flex-col overflow-hidden bg-white dark:bg-neutral-900 sm:rounded-3xl md:h-fit md:max-h-[90%]"
            >
              {/* Podcast Image */}
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={500}
                  height={300}
                  src={active.image}
                  alt={active.title}
                  className="h-80 w-full object-cover object-top sm:rounded-tr-lg sm:rounded-tl-lg lg:h-80"
                />
              </motion.div>

              <div>
                {/* Header with Title and CTA */}
                <div className="flex items-start justify-between p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {active.link && (
                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-green-500 px-4 py-3 text-sm font-bold text-white"
                    >
                      Listen
                    </motion.a>
                  )}
                </div>

                {/* Detailed Content */}
                <div className="relative px-4 pt-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-40 flex-col items-start gap-4 overflow-auto pb-10 text-xs text-neutral-600 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] dark:text-neutral-400 md:h-fit md:text-sm lg:text-base"
                  >
                    {active.details}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Podcast List */}
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Podcasts
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            A list of Podcasts I've been part of.
          </p>
        </div>

        <div className="container py-12">
          <ul className="mx-auto w-full max-w-5xl gap-4">
            {podcastsData.map((podcast, index) => (
              <motion.div
                layoutId={`card-${podcast.title}-${id}`}
                key={`card-${podcast.title}-${id}`}
                onClick={() => setActive(podcast)}
                className="flex cursor-pointer flex-col items-center justify-between rounded-xl p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800 md:flex-row"
              >
                <div className="flex flex-col gap-4 md:flex-row">
                  <motion.div layoutId={`image-${podcast.title}-${id}`}>
                    <Image
                      width={100}
                      height={100}
                      src={podcast.image}
                      alt={podcast.title}
                      className="h-40 w-40 rounded-lg object-cover object-top md:h-14 md:w-14"
                    />
                  </motion.div>
                  <div>
                    <motion.h3
                      layoutId={`title-${podcast.title}-${id}`}
                      className="text-center font-medium text-neutral-800 dark:text-neutral-200 md:text-left"
                    >
                      {podcast.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${podcast.description}-${id}`}
                      className="text-center text-neutral-600 dark:text-neutral-400 md:text-left"
                    >
                      {podcast.description}
                    </motion.p>
                  </div>
                </div>
                <motion.button
                  layoutId={`button-${podcast.title}-${id}`}
                  className="mt-4 rounded-full bg-gray-100 px-4 py-2 text-sm font-bold text-black hover:bg-green-500 hover:text-white md:mt-0"
                >
                  Details
                </motion.button>
              </motion.div>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

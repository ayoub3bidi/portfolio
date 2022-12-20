const siteMetadata = {
  title: 'Portfolio | Ayoub Abidi',
  author: 'Ayoub Abidi',
  headerTitle: 'My portfolio',
  description:
    'my personal portfolio where I share my articles, projects and technologies that I use',
  snippets: 'Reuseable code snippets collected by me',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://ayoub3bidi.vercel.app',
  siteRepo: 'https://github.com/ayoub3bidi/portfolio',
  siteLogo: '/static/images/heart.jpg',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'mrayoubabidi@gmail.com',
  github: 'https://github.com/ayoub3bidi',
  twitter: 'https://twitter.com/ayoub3bidi',
  linkedin: 'https://www.linkedin.com/in/ayoubabidi',
  website: 'https://ayoub3bidi.vercel.app',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-F6V2QTJ628', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: 'ayoub3bidi',
  },
}

module.exports = siteMetadata

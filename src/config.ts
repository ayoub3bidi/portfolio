import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Portfolio',
  subtitle: 'Ayoub Abidi',
  lang: 'en',
  themeColor: {
    hue: 200,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: true,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'assets/images/ghibli-frog.png',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center',      // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: true,         // Display the credit text of the banner image
      text: 'Spirited Away - Studio Ghibli',              // Credit text to be displayed
      url: ''                // (Optional) URL link to the original artwork or artist's page
    }
  },
  toc: {
    enable: true,           // Display the table of contents on the right side of the post
    depth: 2                // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [    // Leave this array empty to use the default favicon
    {
      src: '/public/favicon/favicon.ico',    // Path of the favicon, relative to the /public directory
      // theme: 'light',             // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
      // sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    // LinkPreset.Home,
    LinkPreset.Experience,
    LinkPreset.Archive,
    LinkPreset.Projects,
    LinkPreset.Collaboration,
    LinkPreset.About,
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/profile-pic-2.jpg',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Ayoub Abidi',
  bio: 'Your Friendly Neighborhood Developer.',
  links: [
    // {
    //   name: 'Twitter',
    //   icon: 'fa6-brands:twitter',       // Visit https://icones.js.org/ for icon codes
    //                                     // You will need to install the corresponding icon set if it's not already included
    //                                     // `pnpm add @iconify-json/<icon-set-name>`
    //   url: 'https://twitter.com',
    // },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/ayoub3bidi',
    },
    {
      name: 'LinkedIn',
      icon: 'fa6-brands:linkedin',
      url: 'https://www.linkedin.com/in/ayoubabidi',
    },
    {
      name: 'CV',
      icon: 'fa6-regular:file-lines',
      url: 'https://drive.google.com/file/d/1ztU5GrI5T8kXN3tUxYllSTvgrXGTDK-b/view?usp=sharing'
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: false,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}

const projectsData = [
  {
    title: 'Golf App',
    description: `Golf Tee Times management mobile app for dAInamic. [Comwork project]`,
    imgSrc: '',
    href: '',
    github: '',
    tech1: '',
    tech2: 'Flutter',
    tech3: '',
  },
  {
    title: 'Fairmat App',
    description: `Bar code scanning web app for Fairmat factory. [Comwork project]`,
    imgSrc: '',
    href: '',
    github: '',
    tech1: 'Flutter',
    tech2: 'FastApi • Redis • PostgreSQL',
    tech3: 'Docker • CI/CD',
  },
  {
    title: 'ZAN-f',
    description: `The official ZAN-f wood products website. [Comwork project]`,
    imgSrc: '',
    href: 'https://www.zan-f.com/',
    github: '',
    tech1: 'React',
    tech2: 'Docusaurus',
    tech3: 'Tailwind CSS',
  },
  {
    title: 'Document Control Connector',
    description: `A microservice for Docapost. [Comwork project]`,
    imgSrc: '',
    href: '',
    github: '',
    tech1: 'Flask • Minio',
    tech2: 'Redis • MySQL • Docker',
    tech3: 'CI/CD',
  },
  {
    title: 'Comwork.io',
    description: `The official Comwork website. [Comwork project]`,
    imgSrc: '',
    href: 'https://comwork.io',
    github: '',
    tech1: 'React',
    tech2: 'Docusaurus',
    tech3: 'Tailwind CSS',
  },
  {
    title: 'Comwork Cloud',
    description: `A complete, fully functional, local developers or sysadmin environment on the cloud, has been designed to reduce the setup time as well as your hosting costs. [Comwork project]`,
    imgSrc: '',
    href: 'https://cloud.comwork.io/',
    github: 'https://github.com/idrissneumann/comwork-cloud-wiki',
    tech1: 'React • Docusaurus • Bootstrap • Mantine UI',
    tech2: 'Axios • Flask • Pulumi • Minio',
    tech3: 'Redis • PostgreSQL • Docker • CI/CD • GO',
  },
  {
    title: 'Book Notes',
    description: `Notes from programming books.`,
    imgSrc: '',
    href: 'https://book-notes.vercel.app/',
    github: 'https://github.com/Tunisian-GitHub-Community/Book-notes',
    tech1: 'React',
    tech2: 'Docusaurus',
    tech3: 'CSS',
  },
  {
    title: 'Notes',
    description: `A markdown-supported note-taking web app.`,
    imgSrc: '',
    href: '',
    github: 'https://github.com/ayoub3bidi/ma5zen',
    tech1: 'TypeScript',
    tech2: 'Bootstrap',
    tech3: 'React-select',
  },
  {
    title: 'Ma5zen',
    description: `A full-stack inventory web app.`,
    imgSrc: '',
    href: '',
    github: 'https://github.com/ayoub3bidi/ma5zen',
    tech1: 'Next.js',
    tech2: 'Tailwind CSS • Mantine UI',
    tech3: 'Prisma • PostgreSQL • Docker',
  },
  {
    title: 'Mouzika',
    description: `A Spotify clone. [Academic project]`,
    imgSrc: '',
    href: 'https://mouzika.vercel.app',
    github: 'https://github.com/ayoub3bidi/mouzika',
    tech1: 'React • Redux',
    tech2: 'Tailwind CSS',
    tech3: 'RapidAPI (Shazam core)',
  },
  {
    title: 'Vets',
    description: `A veterinary clinic mobile app. [Tagamuta Valley project]`,
    imgSrc: '',
    href: '',
    github: '',
    tech1: 'Flutter',
    tech2: 'Firebase • Spring Boot',
    tech3: 'BloC/Cubit • Clean Code Architecture',
  },
  {
    title: 'Sector R',
    description: `A real-time chatroom.`,
    imgSrc: '',
    href: 'https://sector-r.vercel.app',
    github: 'https://github.com/ayoub3bidi/sector-r',
    tech1: 'React',
    tech2: 'Sass',
    tech3: 'Firebase',
  },
  {
    title: 'Reddit Clone',
    description: `A full-stack reddit clone.`,
    imgSrc: '',
    href: '',
    github: 'https://github.com/ayoub3bidi/reddit-clone',
    tech1: 'Next • TypeScript',
    tech2: 'Express • TypeORM',
    tech3: 'GraphQL • PostgreSQL',
  },
  {
    title: 'Flousi',
    description: `A simple expense tracker web app.`,
    imgSrc: '',
    href: 'https://flousi.vercel.app',
    github: 'https://github.com/pycoder2000/InstantMD',
    tech1: 'React',
    tech2: 'Express',
    tech3: 'Mongo DB',
  },
  {
    title: 'Ommek Sannefa',
    description: `Kitchen recipes sharing platform.`,
    imgSrc: '',
    href: '',
    github: 'https://github.com/ayoub3bidi/ommek-sannefa',
    tech1: 'Vue',
    tech2: 'VueX',
    tech3: 'Firebase',
  },
  {
    title: 'Podium ESG',
    description: `Financial portfolios publication web app. [End-of-studies internship project]`,
    imgSrc: '',
    href: '',
    github: '',
    tech1: 'Vue • Bootstrap • Quasar',
    tech2: 'Express • Objection.js',
    tech3: 'PostgreSQL • Docker ',
  },
  {
    title: 'Koujina API',
    description: `An API for kitchen recipes.`,
    imgSrc: '',
    href: '',
    github: 'https://github.com/Tunisian-GitHub-Community/Koujina_api',
    tech1: 'Express  • JWT',
    tech2: 'Bcrypt.js',
    tech3: 'Mongo DB',
  },
  {
    title: 'Sou9 API',
    description: `An API for e-commerce.`,
    imgSrc: '',
    href: '',
    github: 'https://github.com/pycoder2000/Stock-Management',
    tech1: 'Express  • JWT',
    tech2: 'Crypto.js',
    tech3: 'Mongo DB',
  },
  {
    title: 'Covid Tracker',
    description: `Covid-19 cases and deaths tracker.`,
    imgSrc: '',
    href: 'https://online-covid-19-tracker.netlify.app',
    github: 'https://github.com/ayoub3bidi/covid-tracker',
    tech1: 'Vue',
    tech2: 'Tailwind CSS',
    tech3: 'Covid-19 API',
  },
  {
    title: 'Time Check',
    description: `Projects management platform. [Freelance project]`,
    imgSrc: '',
    href: '',
    github: '',
    tech1: 'MEVN',
    tech2: 'Bootstrap',
    tech3: '',
  },
  {
    title: 'My List',
    description: `A simple platform to share your passion by creating lists and sharing them with other users. [Summer internship project].`,
    imgSrc: '',
    href: 'https://mylist-f82d6.firebaseapp.com',
    github: 'https://github.com/ayoub3bidi/mylist',
    tech1: 'Vue',
    tech2: 'Boostrap',
    tech3: 'Firebase',
  },
  {
    title: 'My Heroes',
    description: `A minimalist website that can display mini-biographies about 20 programmers who made the internet as we know it today.`,
    imgSrc: '',
    href: 'https://ayoub3bidi.github.io/myheroes/',
    github: 'https://github.com/ayoub3bidi/myheroes',
    tech1: 'Vue',
    tech2: 'Bootstrap',
    tech3: '',
  },
  {
    title: 'Quotes',
    description: `A website that can display random inspirational quotes from a public Api.`,
    imgSrc: '',
    href: 'https://ayoub3bidi.github.io/Quotes',
    github: 'https://github.com/ayoub3bidi/Quotes',
    tech1: 'Bootstrap',
    tech2: 'Javascript',
    tech3: 'Public API',
  },
  {
    title: 'My Favorite LOL Champion',
    description: `A minimalist website for my favorite League of Legends champion Ekko.`,
    imgSrc: '',
    href: 'https://ayoub3bidi.github.io/myFavoriteLolChampion/',
    github: 'https://github.com/ayoub3bidi/myFavoriteLolChampion',
    tech1: 'HTML',
    tech2: 'Bootstrap',
    tech3: 'Javascript',
  },
  {
    title: 'Dokkōdō',
    description: `A minimalist website that can display Musashi's 21 principles for those who walk alone in this life.`,
    imgSrc: '',
    href: 'https://ayoub3bidi.github.io/Dokkodo/#slide=1',
    github: 'https://github.com/ayoub3bidi/Dokkodo',
    tech1: 'JavaScript',
    tech2: 'CSS',
    tech3: 'Webslides',
  },
]

export default projectsData

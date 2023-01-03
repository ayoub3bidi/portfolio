import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import ScrollTop from '@/components/ScrollTop'
import '@/css/extra.css'
import '@/css/prism.css'
import '@/css/tailwind.css'
import siteMetadata from '@/data/siteMetadata'
import '@fontsource/inter/variable-full.css'
import 'katex/dist/katex.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import ProgressBar from 'react-scroll-progress-bar'

NProgress.configure({ showSpinner: false })

Router.onRouteChangeStart = () => {
  // console.log('onRouteChangeStart triggered');
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  // console.log('onRouteChangeComplete triggered');
  NProgress.done()
}

Router.onRouteChangeError = () => {
  // console.log('onRouteChangeError triggered');
  NProgress.done()
}

const defaultTheme = {
  colors: {
    primary: '#71717a',
    secondary: '#ff00c3',
    text: '#fff',
    highlight: '#ff00c3',
    icon: '#fff',
    background: 'transparent',
  },
  fonts: {
    body: 'inherit',
  },
}

export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <ProgressBar bgcolor="#DE1D8D" />
      <ScrollTop />
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}

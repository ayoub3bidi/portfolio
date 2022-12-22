import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/favicons/android-chrome-192x192.png"
            sizes="192x192"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/favicons/android-chrome-512x512.png"
            sizes="512x512"
          />
          <meta name="msapplication-TileImage" content="/static/favicons/mstile-144x144.png" />
          <meta name="msapplication-square70x70logo" content="/static/favicons/mstile-70x70.png" />
          <meta
            name="msapplication-square150x150logo"
            content="/static/favicons/mstile-150x150.png"
          />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
          <meta
            name="description"
            content="Welcome to my personal blog where I share my musings. I am a Data Engineer passionate about Data Science, building pipelines and Automation."
          />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
          <meta
            name="google-site-verification"
            content="_Ba0lKk4Dl9XMvABJ9gZEtoMPITT5Vr5TGx2M-34Z_I"
          />
        </Head>
        <body className="bg-white text-black antialiased dark:bg-background-color dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

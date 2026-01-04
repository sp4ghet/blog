import { Html, Head, Main, NextScript } from 'next/document'
import { siteTitle } from '../components/layout' 


export default function Document() {
  return (
    <Html>
    <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="ようこそインターネット" />
        <meta property="og:image" content="public/img/icons/icon.png" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
          integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
          crossOrigin="anonymous"
        />

        <script async src="//www.instagram.com/embed.js"></script>
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
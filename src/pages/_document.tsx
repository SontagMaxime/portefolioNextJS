import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <title></title>
      <meta name="description" content="Mon portefolio en NextJS."></meta>
      <Head />
      <body>
        <Header/>
        <Main />
        <Footer/>
        <NextScript />
      </body>
    </Html>
  )
}

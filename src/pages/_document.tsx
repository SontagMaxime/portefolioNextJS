import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" title='Sontag Maxime Portefolio NextJS'>
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

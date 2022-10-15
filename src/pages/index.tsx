import Navigation from '../components/Navigation'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import type { NextPage } from 'next'
import Head from 'next/head'

import { Container } from '../styles/pages/home'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Template para uma Padaria, teste para ver a indexação para o SEO da página...</title>
        <meta name="description" content="Template para uma Padaria, teste para ver a indexação para o SEO da página..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
          <Navigation />
      </header>
      <main>
          <About />
          <Contact />
      </main>
      <Footer />
    </Container>
  )
}

export default Home

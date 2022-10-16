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
        <title>Template Padaria</title>
        <meta name="description" content="Template para uma Padaria" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="google-site-verification" content="tQYFCK5UYVRzToD9RkHqH_3pdMD085CRMlDVxmIbEnQ" />
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

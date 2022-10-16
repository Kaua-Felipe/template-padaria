import Navigation from '../components/Navigation'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import type { NextPage } from 'next'
import Head from 'next/head'

import { ContainerHome } from '../styles/pages/home'

const Home: NextPage = () => {
  return (
    <ContainerHome>
      <Head>
        <title>Template Padaria - Home</title>
        <meta name="description" content="Template para uma Padaria" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="google-site-verification" content="tQYFCK5UYVRzToD9RkHqH_3pdMD085CRMlDVxmIbEnQ" />
      </Head>

      <header>
          <Navigation />
          <img src="https://soubh.uai.com.br/uploads/post/image/11025/main_momoconfeitaria_deboragabrich-50.jpg" alt="" />
      </header>
      <main>
          <About />
          <Contact />
      </main>
      <Footer />
    </ContainerHome>
  )
}

export default Home

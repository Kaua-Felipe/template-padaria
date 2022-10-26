import Head from "next/head"

import Navigation from "../components/Navigation"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const Contato: React.FC = () => {
    return (
        <>
            <Head>
                <title>Template Padaria - Contato</title>
                <meta name="description" content="Entre em contato conosco!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <Navigation />
            </header>
            <main>
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default Contato

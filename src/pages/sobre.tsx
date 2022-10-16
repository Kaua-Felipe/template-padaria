import React from "react"
import Head from "next/head"

import { ContainerSobre, SectionSobre } from "../styles/pages/sobre"

import Navigation from "../components/Navigation"
import ProfessionalHistory from "../components/ProfessionalHistory"
import Footer from "../components/Footer"

const Sobre: React.FC = () => {
    return (
        <ContainerSobre>
            <Head>
                <title>Template Padaria - Sobre</title>
                <meta name="description" content="Sessão da página em que você deseje saber mais sobre nós!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <Navigation />
            </header>
            <main>
                <SectionSobre>
                    <div className="about-content">
                        <h1>Sobre</h1>
                        <p>
                            ​Comecei minha jornada profissional em 2000 e, desde então, trabalhei em diversos projetos solo ou com parceiros. Tenho orgulho do trabalho que faço e das longas parcerias que construí com meus clientes. Acredito muito no trabalho árduo e em equipe e na diversão durante todo o processo! Confira meu portfólio e fique à vontade para entrar em contato em caso de dúvidas.
                        </p>
                        <button>Entre em contato</button>
                    </div>
                    <div className="about-img">
                        <img src="https://files.aredacao.com.br/upload/content/empresa-goiana-lanca-clube-de-assinatura-de-paes-e-doces.jpg" alt="" />
                    </div>
                </SectionSobre>
                <ProfessionalHistory />
            </main>

            <Footer />
        </ContainerSobre>
    )
}

export default Sobre

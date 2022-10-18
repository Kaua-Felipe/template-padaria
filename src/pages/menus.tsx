import Head from "next/head"

import Navigation from "../components/Navigation"
import SectionMenus from "../components/SectionMenus"
import Footer from "../components/Footer"

import { PageMenus, ContainerMenus } from "../styles/pages/menus"

const Menus: React.FC = () => {
    return (
        <PageMenus>
            <Head>
                <title>Template Padaria - Menus</title>
                <meta name="description" content="Sessão da página em que você deseje saber mais sobre o catálogo dos menus!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <Navigation />
            </header>
            <ContainerMenus>
                <h1>Menu</h1>
                <p>Servido diariamente</p>

                <SectionMenus 
                    title="ENTRADAS" 
                    description="Esta é uma seção do seu menu. Personalize-a para ficar do jeito que você desejar." 
                />
                <SectionMenus 
                    title="PRATOS PRINCIPAIS" 
                    description="Forneça mais detalhes sobre os itens desta seção, por exemplo, todos os pratos principais podem ser isentos de glúten." 
                />
                <SectionMenus 
                    title="SOBREMESAS" 
                    description="Esta é uma seção do seu menu. Personalize-a para ficar do jeito que você desejar." 
                />
            </ContainerMenus>

            <Footer />
        </PageMenus>
    )
}

export default Menus

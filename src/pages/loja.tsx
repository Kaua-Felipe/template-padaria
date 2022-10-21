import Head from "next/head"

import Navigation from "../components/Navigation"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"

import { ContainerLoja } from "../styles/pages/loja"

const Loja: React.FC = () => {
    return (
        <ContainerLoja>
            <Head>
                <title>Template Padaria - Loja</title>
                <meta name="description" content="Sessão da página em que você possa ver todos os produtos a venda publicados!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <Navigation />
            </header>
            <main>
                <h1>Produtos</h1>

                <section>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </section>
            </main>
            <Footer />
        </ContainerLoja>
    )
}

export default Loja

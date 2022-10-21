import Head from "next/head"

import Navigation from "../components/Navigation"
import Post from "../components/Post"
import Footer from "../components/Footer"

import { ContainerBlog } from "../styles/pages/blog"

const Blog: React.FC = () => {
    return (
        <ContainerBlog>
            <Head>
                <title>Template Padaria - Blog</title>
                <meta name="description" content="Sessão da página em que você possa ver os posts sobre determinados assuntos!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <Navigation />
            </header>
            <main>
                <h1>Todos os posts</h1>

                <Post />
                <Post />
                <Post />
            </main>
            <Footer />
        </ContainerBlog>
    )
}

export default Blog

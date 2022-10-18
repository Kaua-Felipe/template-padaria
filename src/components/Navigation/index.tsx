import Link from "next/link"
import React from "react"

import { Container, NavigationOptions, ContainerLogo } from "./styles"

const Navigation: React.FC = () => {
    return (
        <Container>
            <ContainerLogo>
                <span>PADARIA</span>
            </ContainerLogo>
            <NavigationOptions>
                <li>
                    <Link href="/">Página inicial</Link>
                </li>
                <li>
                    <Link href="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link href="">Entre em contato</Link>
                </li>
                <li>
                    <Link href="">Loja</Link>
                </li>
                <li>
                    <Link href="">Blog</Link>
                </li>
                <li>
                    <Link href="/menus">Menus</Link>
                </li>
            </NavigationOptions>
        </Container>
    )
}

export default Navigation

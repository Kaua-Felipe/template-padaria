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
                    <a href="">Página inicial</a>
                </li>
                <li>
                    <a href="">Sobre</a>
                </li>
                <li>
                    <a href="">Entre em contato</a>
                </li>
                <li>
                    <a href="">Loja</a>
                </li>
                <li>
                    <a href="">Blog</a>
                </li>
                <li>
                    <a href="">Cardápio</a>
                </li>
            </NavigationOptions>
        </Container>
    )
}

export default Navigation

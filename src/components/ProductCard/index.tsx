import { Container, Content, Img } from "./styles"

const ProductCard: React.FC = () => {
    return (
        <Container>
            <Img>
                <img src="/liquidificador.png" alt="" />
            </Img>
            <Content>
                <p>Sou um produto</p>
                <p>R$ 85,00</p>
            </Content>
        </Container>
    )
}

export default ProductCard

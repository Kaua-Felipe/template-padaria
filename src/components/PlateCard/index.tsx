import { Container } from "./styles"

const PlateCard: React.FC = () => {
    return (
        <Container>
            <img src="https://maringapost.com.br/wp-content/uploads/2022/08/720-x-980.jpg" alt="" />
            <p>Este é o nome do seu prato</p>
            <hr />
            <p>
                Esta é a descrição do seu prato. Adicione a lista de ingredientes, informalçao nutricional e qualquer outra observação relevante.
            </p>
            <span>R$ 40</span>
        </Container>
    )
}

export default PlateCard

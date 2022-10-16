import { Container } from "./styles"

interface CardProps {
    title: string
    duration: string
    content: string
}

const Card: React.FC<CardProps> = ({ title, duration, content }) => {
    return (
        <Container>
            <p>{duration}</p>
            <h3>{title}</h3>
            <p>{content}</p>
        </Container>
    )
}

export default Card

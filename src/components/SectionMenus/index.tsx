import { Container } from "./styles"

import SectionItems from "../SectionItems"

interface SectionMenusProps {
    title: string
    description: string
}

const SectionMenus: React.FC<SectionMenusProps> = ({ title, description }) => {
    return (
        <Container>
            <h2>{title}</h2>
            <hr />
            <p>{description}</p>

            <SectionItems />
            <SectionItems />
        </Container>
    )
}

export default SectionMenus

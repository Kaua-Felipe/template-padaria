import PlateCard from "../PlateCard"

import { Container } from "./styles"

const SectionItems: React.FC = () => {
    return (
        <Container>
            <PlateCard />
            <PlateCard />
            <PlateCard />
        </Container>
    )
}

export default SectionItems

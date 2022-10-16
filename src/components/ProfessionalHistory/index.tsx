import Card from "../Card"

import { Container, Cards } from "./styles"

const ProfessionalHistory: React.FC = () => {
    return (
        <Container>
            <h2>HISTÓRICO PROFISSIONAL</h2>
            <p>Minha experiência</p>

            <Cards>
                <Card duration="Abril de 2011 - Março de 2012" title="GERENTE DE PRODUTO" content="​Essa é uma descrição breve de suas experiências e responsabilidades profissionais anteriores. Os portfólios mais eficientes oferecem um retrato claro de sua origem, carreira e de seus objetivos de forma fácil para a leitura e compreensão dos leitores." />
                <Card duration="Novembro de 2009 - Janeiro de 2011" title="​COORDENADOR(A) ASSISTENTE" content="​Essa é uma descrição breve de suas experiências e responsabilidades profissionais anteriores. Os portfólios mais eficientes oferecem um retrato claro de sua origem, carreira e de seus objetivos de forma fácil para a leitura e compreensão dos leitores." />
                <Card duration="Junho de 2012 - Maio de 2014" title="GERENTE DE PROJETO" content="​Essa é uma descrição breve de suas experiências e responsabilidades profissionais anteriores. Os portfólios mais eficientes oferecem um retrato claro de sua origem, carreira e de seus objetivos de forma fácil para a leitura e compreensão dos leitores." />
            </Cards>
        </Container>
    )
}

export default ProfessionalHistory

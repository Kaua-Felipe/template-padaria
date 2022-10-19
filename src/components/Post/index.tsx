import { Container, Content, ContentBottom, ContentTop, ProfileData } from "./styles"

const Post: React.FC = () => {
    return (
        <Container>
            <img src="https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia24593/movimento-pessoas-padarias-artigos-cursos-cpt.jpg" alt="" />
            <Content>
                <ContentTop>
                    <ProfileData>
                        <div>
                            <img src="https://img.freepik.com/vetores-premium/homem-perfil-caricatura_18591-58482.jpg?w=2000" alt="" />
                            <div>
                                <span>Kauã F.</span>
                                <span>7 de out. * 1 min</span>
                            </div>
                        </div>
                        a
                    </ProfileData>
                    <h2>Agite sua vida: como mudar a sua própria perspectiva</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos voluptas officia, dolores sint fugit eius maiores quidem saepe non, in ad....</p>
                </ContentTop>
                <ContentBottom>
                    <div>
                        <span>0 visualização</span>
                        <span>0 comentário</span>
                    </div>
                    ícone
                </ContentBottom>
            </Content>
        </Container>
    )
}

export default Post

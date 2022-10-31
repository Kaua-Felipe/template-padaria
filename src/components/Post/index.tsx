import { Container, Content, ContentBottom, ContentTop, ProfileData } from "./styles"

const Post: React.FC = () => {
    return (
        <Container>
            <div className="post-img" />
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                    </ProfileData>
                    <h2>Agite sua vida: como mudar a sua própria perspectiva</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos voluptas officia, dolores sint fugit eius maiores quidem saepe non, in ad....</p>
                </ContentTop>
                <ContentBottom>
                    <div>
                        <span>0 visualização</span>
                        <div>
                            <span>.</span>
                        </div>
                        <span>0 comentário</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                </ContentBottom>
            </Content>
        </Container>
    )
}

export default Post

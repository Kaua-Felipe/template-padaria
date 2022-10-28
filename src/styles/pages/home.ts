import styled from "styled-components"

export const ContainerHome = styled.div`
    background-color: var(--light-orange);
    width: 100%;
    height: 100vh;

    header, main {
        width: 100%;
    }
    header > div {
        width: 100%;
        height: 700px;
        background-color: var(--white);
        background-image: url("https://soubh.uai.com.br/uploads/post/image/11025/main_momoconfeitaria_deboragabrich-50.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;

        @media(max-width: 675px) {
            height: 500px;
            background-size: 100% 100%;
        }
        @media(max-width: 350px) {
            height: 300px;
            background-size: 100% 100%;
        }
    }
`

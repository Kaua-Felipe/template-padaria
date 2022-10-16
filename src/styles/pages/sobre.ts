import styled from "styled-components"

export const ContainerSobre = styled.section`
    width: 100%;
    height: 100vh;
    background-color: var(--white);

    header, main {
        width: 100%;
    }
`
export const SectionSobre = styled.section`
    display: flex;
    align-items: center;
    color: var(--medium-orange);
    height: 600px;
    /* https://soubh.uai.com.br/uploads/post/image/11025/main_momoconfeitaria_deboragabrich-50.jpg */
    
    .about-content {
        width: calc(50% - 200px);
        height: 300px;
        padding: 120px 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;        

        h1 {
            font-size: 40px;
            font-weight: 100;
        }
        p {
            font-size: 15px;
            font-weight: lighter;
            line-height: 1.88;
        }
        button {
            width: 30%;
            height: 50px;
            padding: 10px 0;
            background: transparent;
            border: solid var(--medium-orange) 1px;
            border-radius: 30px;
            color: var(--medium-orange);
            margin-top: 10px;
            cursor: pointer;
            transition-duration: .5s;

            &:hover {
                background-color: var(--medium-orange);
                color: var(--white);
            }
        }
    }
    .about-img {
        width: 50%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
        }
    }
`

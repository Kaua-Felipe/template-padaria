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
    background-color: var(--white);
    display: flex;
    align-items: center;
    color: var(--medium-orange);
    height: 600px;
    
    .about-content {
        width: calc(50% - 200px);
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
            width: 140px;
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
            @media(max-width: 630px) {
                margin: 0 auto;
            }
        }
        @media(max-width: 790px) {
            padding: 150px 20px;
            width: calc(50% - 40px);
        }
        @media(max-width: 630px) {
            padding: 100px 0px 50px;
            width: 100%;
            text-align: center;
            gap: 10px;
        }
    }
    .about-img {
        width: 50%;
        height: 100%;
        
        img {
            width: 100%;
            height: 100%;
        }
        @media(max-width: 630px) {
            width: 100%;
            height: 300px;
        }
    }
    @media(max-width: 790px) {
        height: 400px;
    }
    @media(max-width: 630px) {
        flex-direction: column;
        height: calc(400px + 300px);
        justify-content: space-between;
    }
`

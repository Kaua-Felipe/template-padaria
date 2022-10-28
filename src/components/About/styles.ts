import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    background-color: var(--white);
    padding: 50px 0;

    h2 {
        color: var(--medium-orange);
        text-align: center;
        font-size: 65px;
        font-weight: 300;
        margin-bottom: 20px;

        @media(max-width: 675px) {
            font-size: 40px;
        }
        @media(max-width: 350px) {
            font-size: 30px;
        }
    }
    p {
        text-align: center;
        width: 50%;
        margin: 0 auto;
        line-height: 30px;
        font-weight: 300;
        color: var(--medium-orange);
        
        @media(max-width: 675px) {
            width: 80%;
        }
    }
`

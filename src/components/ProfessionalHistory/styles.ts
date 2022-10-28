import styled from "styled-components"

export const Container = styled.section`
    background-color: var(--medium-orange);
    color: var(--white);
    padding: 100px 0 90px 0;

    h2 {
        font-size: 40px;
        font-weight: lighter;
        text-align: center;
        margin-bottom: 15px;

        @media(max-width: 310px) {
            font-size: 30px;
        }
    }
    > p {
        text-align: center;
        font-size: 18px;
    }
`
export const Cards = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

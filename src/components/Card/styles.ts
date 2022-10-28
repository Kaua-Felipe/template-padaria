import styled from "styled-components"

export const Container = styled.div`
    width: calc(25% - 50px);
    width: 250px;
    background-color: var(--white);
    color: var(--medium-orange);
    padding: 70px 50px;
    height: 280px;
    height: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    @media(max-width: 320px) {
        padding: 70px 5%;
    }
    @media(max-width: 230px) {
        padding: 70px 0;
    }
    > p {
        font-size: 18px;
        font-weight: 100;
    }
    h3 {
        font-size: 22px;
        font-weight: 100;
    }
    p:last-child {
        font-size: 15px;
        font-weight: 100;
        line-height: 1.88;
    }
`

import styled from "styled-components"

export const Container = styled.div`
    width: calc(25% - 50px);
    background-color: var(--white);
    color: var(--medium-orange);
    padding: 70px 50px;
    height: 280px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    
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

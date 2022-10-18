import styled from "styled-components"

export const Container = styled.section`
    background-color: var(--white);
    margin-bottom: 140px;

    &:last-child {
        margin: 0;
    }

    > h2, > p, > hr {
        text-align: center;
        font-weight: lighter;
    }
    > h2 {
        font-size: 25px;
    }
    > p {
        font-size: 18px;
    }
    > hr {
        background-color: var(--medium-orange);
        width: 100px;
        height: 2px;
        margin: 25px auto;
    }
`

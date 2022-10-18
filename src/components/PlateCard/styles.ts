import styled from "styled-components"

export const Container = styled.div`
    width: 240px;

    > h2, > p, > hr, > span {
        text-align: center;
        font-weight: lighter;
    }
    > img {
        width: 100%;
        height: 220px;
        margin-bottom: 20px;
    }
    p {
        line-height: 1.88;
    }
    > hr {
        width: 200px;
        background-color: var(--medium-orange);
        height: 2px;
        margin: 15px auto;
    }
    span {
        display: block;
        margin-top: 20px;
    }
`

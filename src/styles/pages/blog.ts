import styled from "styled-components"

export const ContainerBlog = styled.div`
    width: 100%;
    background-color: var(--white);

    main > h1 {
        margin: 25px 0 35px 240px;
        font-size: 18px;
        font-weight: lighter;
        color: var(--medium-orange);

        @media(max-width: 1270px) {
            margin-left: 10%;
        }
        @media(max-width: 970px) {
            margin-left: 5%;
        }
    }
`

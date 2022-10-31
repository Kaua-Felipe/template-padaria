import styled from "styled-components"

export const ContainerLoja = styled.div`
    width: 100%;
    background-color: var(--white);

    main {
        width: 100%;
        padding-top: 20px;

        h1 {
            text-align: center;
            color: var(--medium-orange);
            font-weight: lighter;
        }
        section {
            margin: 0 200px;
            color: var(--medium-orange);
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
            padding: 50px 0 100px;

            @media(max-width: 850px) {
                margin: 0;
            }
        }
    }
`

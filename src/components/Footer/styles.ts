import styled from "styled-components"

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 40px 0;
    color: var(--medium-orange);

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        span:first-child {
            font-size: 20px;
        }
        span:last-child {
            font-size: 14px;
        }
    }
    & > span {
        margin-top: 40px;
        font-size: 14px;
    }
`

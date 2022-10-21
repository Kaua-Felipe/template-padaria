import styled from "styled-components"

export const Container = styled.article`
    display: flex;
    margin: 25px 240px;
    color: var(--medium-orange);
    border: 1px solid var(--orange-opacity);
    transition-duration: .5s;

    img {
        width: 50%;
    }
    &:hover {
        box-shadow: 0px 0px 10px var(--light-orange);
    }
`
export const Content = styled.div`
    width: 50%;
    padding: 25px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 60px;
`
export const ContentTop = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
        line-height: 1.2;
        font-size: 28px;
        font-weight: lighter;
    }
    p {
        font-size: 16px;
        line-height: 1.3;
    }
`
export const ProfileData = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
        display: flex;

        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
        > div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 10px;

            span {
                font-size: 15px;
            }
        }
    }
    > svg {
        cursor: pointer;
    }
`
export const ContentBottom = styled.div`
    border-top: 1px solid var(--orange-opacity);
    display: flex;
    justify-content: space-between;
    padding-top: 15px;

    > div {
        display: flex;
        justify-content: center;
        gap: 8px;

        span {
            font-size: 13px;
        }
        > div {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 10px;

            > span {
                display: block;
                font-weight: bold;
                font-size: 15px;
            }
        }
    }
    > svg {
        color: red;
        cursor: pointer;
    }
`

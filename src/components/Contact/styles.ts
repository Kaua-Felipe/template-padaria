import styled from "styled-components"

export const ContainerContact = styled.section`
    background-color: var(--white);
    padding: 100px 18%;

    @media(max-width: 675px) {
        padding: 100px 2%;
    }
`
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    color: var(--medium-orange);
    gap: 10%;

    @media(max-width: 675px) {
        flex-direction: column;
        gap: 50px;
    }
`
export const Informations = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    font-weight: 300;
    font-size: 15px;

    h2 {
        font-size: 35px;
        font-weight: 300;
    }
    a {
        color: var(--medium-orange);
    }
    @media(max-width: 675px) {
        text-align: center;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex: 2;

    button {
        background-color: var(--medium-orange);
        padding: 10px 0;
        color: var(--white);
        font-size: 17px;
        cursor: pointer;
        transition-duration: .5s;

        &:hover {
            opacity: .7;
        }
    }
    p {
        font-size: 18px;
        font-weight: lighter;
        text-align: center;
        margin-top: 15px;
    }
`

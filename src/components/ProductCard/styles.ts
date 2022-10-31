import styled from "styled-components"

export const Container = styled.div`
    width: 200px;
`
export const Content = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    p {
        font-size: 14px;
        font-weight: lighter;
        
        &:last-child {
            color: var(--light-orange);
        }
    }
`
export const Img = styled.div`
    background-color: white;
    width: 100%;
    height: 230px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 50%;
        height: 50%;
    }
`

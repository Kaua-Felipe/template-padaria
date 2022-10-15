import styled from "styled-components"

import { borderBottomAnimation } from "../../styles/animations"

export const Container = styled.nav`
    background-color: var(--white);
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
`
export const ContainerLogo = styled.div`
    padding: 20px 0;

    span {
        font-size: 25px;
        font-weight: 300;
        color: var(--dark-orange);
    }
`
export const NavigationOptions = styled.ul`
    background-color: var(--medium-orange);
    display: flex;
    justify-content: center;
    padding: 10px 0;

    li {
        margin: 0 12px;
        
        a {
            width: 100%;
            color: var(--white);
            font-weight: 300;
            font-size: 14px;
            
            &:hover {
                animation: ${borderBottomAnimation} .5s 1 both ease-out;
            }
        }
    }
`

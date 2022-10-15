import styled from "styled-components"

interface ContainerProps {
    readonly fieldLarge: any
}

export const Container = styled.div<ContainerProps>`
    width: ${props => props.fieldLarge ? "100%" : "48%"};
    display: flex;
    flex-direction: column;

    label {
        margin: 0 0 5px 5px;
    }
    input, textarea {
        border: none;
        background: none;
        padding: 15px 5px;
        outline: none;
        border-bottom: 1px solid var(--medium-orange);
        color: var(--medium-orange);
        
        &:focus, &:hover {
            outline-width: 1px;
            outline-color: var(--medium-orange);
            outline-style: solid;
        }
        &::placeholder {
            color: var(--medium-orange);
        }
    }
    textarea {
        resize: vertical;
    }
`

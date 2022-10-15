import React from "react"

import { Container } from "./styles"

interface InputGroupsProps {
    inputField: any
}

const InputGroups: React.FC<InputGroupsProps> = ({ inputField }) => {
    return (
        <Container>
            {inputField}
        </Container>
    )
}

export default InputGroups

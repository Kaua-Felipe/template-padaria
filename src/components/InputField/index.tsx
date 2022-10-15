import React, { InputHTMLAttributes } from "react"
import { Container } from "./styles"

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    type?: string
    mandatory?: boolean
    placeholder: string
    fieldLarge?: boolean
    textarea?: boolean
}

const InputField: React.FC<InputFieldProps> = ({ label, type, mandatory, placeholder, fieldLarge, textarea }) => {
    let component = (
        <input 
            type={type} 
            placeholder={placeholder} 
            id={label.toLowerCase()} 
        />
    )

    if(mandatory) {
        component = (
            <input 
                type={type} 
                placeholder={placeholder} 
                id={label.toLowerCase()} 
                required
            />
        )
    }

    return (
        <Container fieldLarge={fieldLarge}>
            <label htmlFor={label.toLowerCase()}>{label} {mandatory && "*"}</label>

            {!textarea ? component : (
                <textarea name={label.toLowerCase()} id={label.toLowerCase()} placeholder={placeholder} cols={30} rows={3}></textarea>
            )}
        </Container>
    )
}

export default InputField

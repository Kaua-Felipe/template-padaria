import React from "react"

import InputGroups from "../InputGroups"
import InputField from "../InputField"

import { ContainerContact, Container, Informations, Form } from "./styles"

const Contact: React.FC = () => {
    return (
        <ContainerContact>
            <Container>
                <Informations>
                    <h2>ENTRE EM CONTATO</h2>
                    <span>Rua Fulano de Tal, 999</span>
                    <a href="">email@gmail.com</a>
                    <a href="">(18) 97362-1982</a>
                </Informations>
                <Form>
                    <InputGroups
                        inputField={
                            [
                                <InputField label="Nome" mandatory={true} type="text" placeholder="Insira seu nome" key={Math.random()} />, 
                                <InputField label="E-mail" mandatory={true} type="email" placeholder="Insira seu email" key={Math.random()} />
                            ]
                        } 
                    />
                    <InputGroups
                        inputField={
                            [
                                <InputField label="Telefone" type="tel" placeholder="Insira seu telefone" key={Math.random()} />, 
                                <InputField label="Endereço" type="text" placeholder="Insira seu endereço" key={Math.random()} />
                            ]
                        } 
                    />
                    <InputGroups
                        inputField={
                            [
                                <InputField label="Assunto" type="text" placeholder="Insira o assunto" fieldLarge={true} key={Math.random()} />
                            ]
                        } 
                    />
                    <InputGroups
                        inputField={
                            [
                                <InputField label="Mensagem" placeholder="Digite sua mensagem aqui" fieldLarge={true} textarea={true} key={Math.random()} />
                            ]
                        } 
                    />
                    
                    <button type="submit">Enviar</button>
                    <p>Obrigado(a)!</p>
                </Form>
            </Container>
        </ContainerContact>
    )
}

export default Contact

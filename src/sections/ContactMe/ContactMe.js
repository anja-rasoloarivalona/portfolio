import React, { useState } from "react"
import styled from "styled-components"
import { useSelector } from 'react-redux'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;
`

const Title = styled.div`
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
`

const Form = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: max-content;
    grid-auto-rows: max-content;
    width: 100%;
    max-width: 60rem;
    column-gap: 1rem;
    grid-gap: 1rem;

    input {
        height: 4rem;
        margin-top: .5rem;
        padding: 0 1rem;
    }

    textarea {
        min-height: 8rem;
        margin-top: .5rem;
        padding: 1rem;
    }
`

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    &.spread {
        grid-column: 1 / -1;
    }
`

const FormLabel = styled.label`
    font-size: 1.4rem;
`

const FormInput = styled.input``

const FormTextArea = styled.textarea`
    
`

const CtaContainer = styled.div`
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
`

const Cta = styled.div`
    font-size: 1.6rem;
    padding: 1rem 1.5rem;
    // border: 1px solid ${({ theme }) => theme.green};
    // color: ${({ theme }) => theme.green};
`

const ContactMe = () => {

    const {
        text
    } = useSelector(state => state)

    const [formValues, setFormValues ] = useState({
        name: "",
        email: "",
        message: ""
    })

    const onChangeHandler = (e, key) => {
        setFormValues(prev => ({
            ...prev,
            [key]: e.target.value
        }))
    }

    return (
        <Container>
            <Title>Get in touch</Title>
            <Form>
                <FormGroup>
                    <FormLabel>{text.name}</FormLabel>
                    <FormInput 
                        value={formValues.name}
                        onChange={e => onChangeHandler(e, "name")}
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>{text.email}</FormLabel>
                    <FormInput 
                        value={formValues.email}
                        onChange={e => onChangeHandler(e, "email")}
                        type="email"
                    />
                </FormGroup>
                <FormGroup className="spread">
                    <FormLabel>{text.message}</FormLabel>
                    <FormTextArea 
                        value={formValues.message}
                        onChange={e => onChangeHandler(e, "message")}
                        type="text"
                    />
                </FormGroup>
                <CtaContainer>
                    <Cta>{text.send}</Cta>
                </CtaContainer>
            </Form>
        </Container>
     )
};

export default ContactMe;

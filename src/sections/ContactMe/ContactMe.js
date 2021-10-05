import React, { useState } from "react"
import styled from "styled-components"
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 90vh;
    width: 100%;
    margin-top: 10vh;
    z-index: 3;
    background: ${({ theme }) => theme.lightBlue};
    overflow-y: scroll;
    padding-bottom: 10vh;

    @media screen and (max-width: 664px){
        padding: 3rem 4rem;
    }
`

const Title = styled.div`
    text-align: center;
    font-size: 3rem;
    margin-bottom: 4.5rem;
    max-width: 65rem;
    line-height: 1.4;
    color: ${({ theme }) => theme.brightGrey};

    @media screen and (max-width: 830px){
        font-size: 2.5rem;
    }
`

const Form = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: max-content;
    grid-auto-rows: max-content;
    width: 100%;
    max-width: 60rem;
    column-gap: 2rem;
    row-gap: 3rem;

    input {
        height: 4.5rem;
        margin-top: .5rem;
        padding: 0 1rem;
        border-radius: .5rem;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    textarea {
        min-height: 8rem;
        margin-top: .5rem;
        padding: 1rem;
        border-radius: .5rem;
    }
`

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    &.spread {
        grid-column: 1 / -1;
    }

    @media screen and (max-width: 560px){
        grid-column: 1 / -1;
    }
`

const FormLabel = styled.label`
    font-size: 1.4rem;
    color: ${({ theme }) => theme.brightGrey};
`

const FormInput = styled.input`
    font-size: 1.6rem;
    :focus {
        outline: none;
    }
`

const FormTextArea = styled.textarea`
    resize: vertical;
    max-height: 50vh;
    :focus {
        outline: none;
    } 
`

const CtaContainer = styled.div`
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
`

const Cta = styled.div`
    width: 100%;
    font-size: 1.6rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.green};
    color: ${({ theme }) => theme.green};
    border-radius: .5rem;
    cursor: pointer;
    :hover {
        background: ${({ theme }) => theme.greenTransparent};
    }
`

const Select = styled.div`
    position: relative;
`

const SelectValue = styled.div`
    height: 4.5rem;
    margin-top: .5rem;
    padding: 0 1rem;
    border-radius: .5rem;
    background: white;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;

    svg {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        right: 1rem;
        z-index: 1;
        color: ${({ theme }) => theme.darkGreen} !important;
    }
`

const SelectList = styled.ul`
    position: absolute;
    top: calc(100% + .5rem);
    left: 0;
    width: 100%;
    background: white;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    z-index: 2;
    border-radius: .5rem;
    list-style: none;
    padding: 1rem;
`

const SelectListItem = styled.li`
    padding: 1rem;
    cursor: pointer;
    font-size: 1.6rem;
    border-radius: .5rem;
    :hover {
        background: ${({ theme }) => theme.white};
    }
`


const ContactMe = () => {

    const {
        text
    } = useSelector(state => state)


    const [ showList, setShowList ] = useState(false)

    const [formValues, setFormValues ] = useState({
        name: "",
        email: "",
        type: "",
        budget: "",
        message: ""
    })

    const onChangeHandler = (e, key) => {
        setFormValues(prev => ({
            ...prev,
            [key]:  e.target.value
        }))
    }

    const selectHandler = type => {
        setFormValues(prev => ({
            ...prev,
            type
        }))
        setShowList(false)
    }

    const types = [
        {label: text.website, value: "website"},
        {label: text.mobile_app, value: "mobile_app"},
        {label: text.desktop_app, value: "desktop_app"},
        {label: text.ecommerce, value: "ecommerce"},
        {label: text["2d_game"], value: "2d game"},
        {label: text.custom, value: "custom"},
    ]

    return (
        <Container>
            <Title>{text.contact_me_title}</Title>
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
                <FormGroup>
                    <FormLabel>{text.project_type}</FormLabel>
                    <Select>
                        <SelectValue onClick={() => setShowList(prev => !prev)}>
                            {formValues.type?.label}
                            <FontAwesomeIcon icon="chevron-down"/>
                        </SelectValue>
                        {showList && (
                            <SelectList>
                                {types.map((type, index) => (
                                    <SelectListItem key={index} onClick={() => selectHandler(type)}>
                                        {type.label}
                                    </SelectListItem>
                                ))}
                            </SelectList>
                        )}
                    </Select>
                </FormGroup>
                <FormGroup>
                    <FormLabel>{text.budget} (CAD)</FormLabel>
                    <FormInput 
                        value={formValues.budget}
                        onChange={e => onChangeHandler(e, "budget")}
                        type="number"
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

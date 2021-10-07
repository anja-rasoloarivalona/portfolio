import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Spinner from '../../components/Spinner'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 100%;
    padding-top: 10vh;
    z-index: 3;
    background: ${({ theme }) => theme.lightBlue};

    * {
        font-family: Open Sans;
    }

    @media screen and (max-width: 664px){
        padding: 3rem 4rem;
        padding-top: 9rem;
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
    position: relative;

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

    span {
        color: #e35656;
    }
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
    font-size: 1.6rem;
    :focus {
        outline: none;
    } 
`

const CtaContainer = styled.div`
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
    height: 5rem;
    position: relative;
    margin-top: 1rem;
`

const Cta = styled.button`
    width: 100%;
    height: 100%;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.green};
    color: ${({ theme }) => theme.green};
    border-radius: .5rem;
    cursor: pointer;
    background: transparent;
    :focus {
        outline: none;
    }
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

const Error = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.4rem;
    color: #e35656;
`

const ConfirmationBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    padding: 0 2rem;
    * {
        transform: translateY(-12vh);
    }
`

const ConfirmationText = styled.div`
    font-size: 2.6rem;
    color: ${({ theme }) => theme.darkGrey};
    text-align: center;
`

const ConfirmationButton = styled.div`
    border: 1px solid ${({ theme }) => theme.green};
    color: ${({ theme }) => theme.green};
    border-radius: .5rem;
    cursor: pointer;
    padding: 1rem 2rem;
    margin-top: 2rem;
    font-size: 1.6rem;
    :hover {
        background: ${({ theme }) => theme.greenTransparent};
    }
`

const ContactMe = props => {


    const { closeHandler } = props

    const {
        text
    } = useSelector(state => state)

    const [ showList, setShowList ] = useState(false)
    const [ errors, setErrors ] = useState({})
    const [ isSubmitting, setIsSubmitting ] = useState(false)
    const [ isSubmitted, setIsSubmitted ] = useState(false)

    const [formValues, setFormValues ] = useState({
        name: "",
        email: "",
        type: "",
        budget: "",
        message: ""
    })

    useEffect(() => {
        const _errors = {...errors}
        if(errors.name && formValues.name){
            _errors.name = false
        }
        if(errors.email && isEMailValid(formValues.email)){
            _errors.email = false
        }
        setErrors(_errors)

    },[formValues])


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

    const  isEMailValid = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const submitHandler = async e => {
        e.preventDefault()
        const _errors = {}
        if(!formValues.email){
            _errors.email = text.form_required
        } else {
            if(!isEMailValid(formValues.email)){
                _errors.email = text.form_invalid_email
            }
        }
        if(!formValues.name){
            _errors.name = text.form_required
        }

        if(Object.values(_errors).length > 0){
            setErrors(_errors)
        } else {
            setIsSubmitting(true)
            try {
                const res = await fetch("https://formspree.io/f/meqvdpnn", {
                    method: "POST",
                    body: JSON.stringify({
                        ...formValues,
                        type: formValues.type ? formValues.type.value : "",
                    }),
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                if(res.status === 200){
                    setIsSubmitting(false)
                    setIsSubmitted(true)
                } else {
                    setIsSubmitting(false)
                }
                // console.log({
                //     res
                // })
            } catch(err){
                console.log({ err })
            }
        }
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
            {!isSubmitted && (
                <>
                    <Title>{text.contact_me_title}</Title>
                    <Form onSubmit={submitHandler}>
                        <FormGroup>
                            <FormLabel>{text.name} <span>&#42;</span></FormLabel>
                            <FormInput 
                                value={formValues.name}
                                onChange={e => onChangeHandler(e, "name")}
                                type="text"
                            />
                            {errors.name && <Error>{errors.name}</Error>}
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>{text.email} <span>&#42;</span></FormLabel>
                            <FormInput 
                                value={formValues.email}
                                onChange={e => onChangeHandler(e, "email")}
                                type="email"
                            />
                            {errors.email && <Error>{errors.email}</Error>}
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
                            {isSubmitting ?
                                <Spinner /> :
                                <Cta type="submit">{text.send}</Cta>
                            }
                        </CtaContainer>
                    </Form>
                </>
            )}
            {isSubmitted && (
                <ConfirmationBox>
                    <ConfirmationText>{text.confirmation_text}</ConfirmationText>
                    <ConfirmationButton onClick={closeHandler}>{text.back}</ConfirmationButton>
                </ConfirmationBox>
            )}
            
        </Container>
     )
};

export default ContactMe;

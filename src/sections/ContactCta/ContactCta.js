import React from "react"
import styled from "styled-components"
import { useSelector } from 'react-redux'

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    padding-bottom: 6rem;
    background: ${({ theme }) => theme.lightBlue};
`

const Content = styled.div`
    width: 95%;
    max-width: 120rem;
    background: ${props => props.theme.blue};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: .5rem;
    box-shadow: ${({ theme }) => theme.boxShadow};
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5rem 2rem;
`

const Title = styled.div`
    font-size: 3rem;
    font-weight: 700;
    color: ${props => props.theme.brightGrey};
`

const Text = styled.span`
    font-size: 1.4rem;
    max-width: 30rem;
    text-align: center;
    color: ${props => props.theme.brightGrey};
    line-height: 1.4;
`


const Cta = styled.div`
    padding: 1rem 1.5rem;
    border: 1px solid ${({ theme }) => theme.green};
    color: ${({ theme }) => theme.green};
    border-radius: .5rem;
    font-size: 1.6rem;
    transition: all .3s ease-in;
    cursor: pointer;
    :hover {
        background: ${({ theme }) => theme.greenTransparent};
    }
`

const ContactCta = () => {

    const { text } = useSelector(state => state)

    return (
        <Container>
            <Content>
                <Title>{text.contact_cta_title}</Title>
                <Text>{text.contact_cta_text}</Text>
                <Cta>{text.contact_cta_button}</Cta>
            </Content>
        </Container>
    )
};

export default ContactCta;

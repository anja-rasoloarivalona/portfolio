import React from "react"
import styled from "styled-components"
import { useSelector } from 'react-redux'
import Icon from '../../icons'

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 6rem;
    background: ${({ theme }) => theme.lightBlue};
    height: 20vh;

    @media screen and (max-width: 1200px){
        height: unset;
        padding: 0 4rem;
        padding-bottom: 2rem;
    }

    @media screen and (max-width: 492px){
        padding: 2rem 0 ;
    }
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

    @media screen and (max-width: 1375px){
        width: calc(100% - 25rem);
        padding: 2rem;
    }

    @media screen and (max-width: 1200px){
        flex-direction: column;
        width: 100%;
        padding: 3rem 0;
    }
`

const Title = styled.div`
    font-size: 3rem;
    font-weight: 700;
    color: ${props => props.theme.brightGrey};
`

const Text = styled.span`
    font-size: 1.6rem;
    max-width: 32rem;
    text-align: center;
    color: ${props => props.theme.brightGrey};
    line-height: 1.4;

    @media screen and (max-width: 1200px){
        margin: 3rem 0;
    }

    
    @media screen and (max-width: 1000px){
        width: 90%;
        max-width: 50rem;
    }
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

const SocialMediaLinks = styled.div`
    margin-top: 4rem;
    @media screen and (min-width: 1201px){
        display: none;
    }
`

const SocialMediaLink = styled.a`
    svg {
        width: 3rem;
        height: 3rem;
        fill: ${({ theme }) => theme.darkGrey};
        margin: 0 2rem;
    } 
    :hover {
        fill: ${({ theme }) => theme.brightGrey};
    }
`

const ContactCta = props => {

    const { setShowContact } = props

    const { text } = useSelector(state => state)


    const list = [
        {icon: "github", link: "https://github.com/anja-rasoloarivalona"},
        {icon: "linkedin", link: "https://www.linkedin.com/in/anja-rasoloarivalona/"},
        {icon: "cv" },
    ]

    return (
        <Container>
            <Content>
                <Title>{text.contact_cta_title}</Title>
                <Text>{text.contact_cta_text}</Text>
                <Cta onClick={() => setShowContact(true)}>{text.contact_cta_button}</Cta>
            </Content>
            <SocialMediaLinks>
                {list.map((link, index) => (
                    <SocialMediaLink key={index} rel="noopener noreferrer"  target="_blank" href={link.link}>
                        <Icon icon={link.icon}/>
                    </SocialMediaLink>
                ))}
            </SocialMediaLinks>
        </Container>
    )
};

export default ContactCta;

import React, { useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { useSelector, useDispatch } from 'react-redux'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.theme.lightBlue};
    position: relative;
    z-index: 2;
    padding-top: 15%;
    overflow: hidden;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 95%;
    max-width: 90rem;
`

const IntroText = styled.div`
    font-size: 1.6em;
    font-weight: 400;
    color: ${props => props.theme.green};
`

const Title = styled.div`
    font-size: 8rem;
    font-weight: 700;
    color: ${props => props.theme.white};
    line-height: 1.5;
`

const SubTitle = styled.div`
    font-size: 4rem;
    font-weight: 600;
    color: ${props => props.theme.lightGrey};
`

const Cta = styled.div`
    margin-top: 3rem;
    position: relative;

    svg {
        color: ${props => props.theme.lightGrey};
    }
`

const CtaButton = styled.div`
    padding: 1rem 2rem;
    border: 1px solid ${props => props.theme.green};
    color: ${props => props.theme.green};
    transition: all .3s ease-in;
    font-size: 1.6rem;
    border-radius: .5rem;
    cursor: pointer;
    
    :hover {
        background: ${props => props.theme.greenTransparent};
    }
`
const CtaIcon = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 90%;
    margin: auto;
    z-index: 2;
    display: flex;
    align-items: center;

    svg {
        font-size: 1.4rem;
    }
`

const CtaIconBar = styled.div`
    width: 3rem;
    height: 2px;
    background: ${props => props.theme.lightGrey};
`

const Home = props => {

    const dispatch = useDispatch()
    const { text } = useSelector(s => s)

    return (
        <Container>
            <Content>
                <IntroText>{text.intro_hi}</IntroText>
                <Title>
                    Anja Rasoloarivalona.
                </Title>
                <SubTitle>
                    {text.intro_i_am}
                </SubTitle>
                <Cta>
                    <CtaButton>
                        {text.contact}
                    </CtaButton>
                    <CtaIcon>
                        <CtaIconBar />
                        <FontAwesomeIcon icon="chevron-right"/>
                    </CtaIcon>
                </Cta>
            </Content>
        </Container>
     )
};

export default Home;

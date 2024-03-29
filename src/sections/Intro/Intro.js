import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import SlideAnimation from '../../components/SlideAnimation'

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

    @media screen and (max-width: 1200px){
        padding-top: unset;
        justify-content: center;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 95%;
    max-width: 90rem;

    @media screen and (max-width: 1000px){
        max-width: unset;
        width: 100%;
        padding: 0 4rem;
    }
    
    * {
        position: relative;
        z-index: 2;
    }
`

const IntroText = styled.div`
    font-size: 1.6em;
    font-weight: 400;
    color: ${props => props.theme.green};

    @media screen and (max-width: 740px){
        font-size: 1.4rem;
    }

    @media screen and (max-width: 512px){
        font-size: 1.3rem;
    }
`

const Title = styled.div`
    font-size: 8rem;
    font-weight: 700;
    color: ${props => props.theme.white};
    line-height: 1.5;

    @media screen and (max-width: 960px){
        font-size: 6rem;
    }

    @media screen and (max-width: 740px){
        font-size: 4.5rem;
    }

    @media screen and (max-width: 512px){
        font-size: 3.5rem;
    }
`

const SubTitle = styled.div`
    font-size: 4rem;
    font-weight: 600;
    color: ${props => props.theme.lightGrey};
    padding-left: 4px;

    @media screen and (max-width: 960px){
        font-size: 3rem;
    }

    @media screen and (max-width: 740px){
        font-size: 2rem;
    }

    @media screen and (max-width: 512px){
        font-size: 1.6rem;
    }
`

const Cta = styled.div`
    margin-top: 3rem;
    position: relative;
    display: flex;
    align-items: center;
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

    @media screen and (max-width: 740px){
        font-size: 1.4rem;
    }

    @media screen and (max-width: 512px){
        font-size: 1.3rem;
    }
`
const CtaIcon = styled.div`
    display: flex;
    align-items: center;
    transform: translateX(-1rem);
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

    const { showContent, setShowContact } = props

    const { text } = useSelector(s => s)

    return (
        <Container>
            <Content>
                <IntroText>
                    {text.intro_hi}
                    <SlideAnimation trigger={showContent}/>
                </IntroText>
                <Title>
                    Anja Rasoloarivalona.
                    <SlideAnimation trigger={showContent}/>
                </Title>
                <SubTitle>
                    {text.intro_i_am}
                    <SlideAnimation trigger={showContent}/>
                </SubTitle>
                <Cta>
                    <CtaButton onClick={() => setShowContact(true)}>
                        {text.contact}
                    </CtaButton>
                    <CtaIcon showContent={showContent}>
                        <CtaIconBar />
                        <FontAwesomeIcon icon="chevron-right"/>
                    </CtaIcon>
                    <SlideAnimation trigger={showContent}/>
                </Cta>
            </Content>
        </Container>
     )
};

export default Home;

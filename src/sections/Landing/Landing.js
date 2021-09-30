import React from "react"
import styled from "styled-components"
import landing from '../../assets/landing.jpg'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { scrollTo } from '../../functions'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    transform-origin: bottom;
    z-index: 3;
    transform-style: preserve-3d;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(40%);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

    * {
        line-height: 1.4;
    }
`

const MainText = styled.div`
    font-size: 4rem;
    margin-bottom: 1rem;
`

const SubText = styled.div`
    font-size: 4rem;
`

const Cta = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid white;
    margin-top: 2rem;
    cursor: pointer;

    svg {
        color: white;
        font-size: 1.4rem;
    }
`

const Landing = () => {

    const {  text } = useSelector(state =>state)

    const scrollHandler = () => {
        scrollTo(`trigger-end`, 1000)
    }

    return (
        <Container>
            <Image src={landing}/>
            <Content>
                <MainText>{text.landing_text_a}</MainText>
                <SubText>{text.landing_text_b}</SubText>
                <Cta onClick={scrollHandler}>
                    <FontAwesomeIcon icon="chevron-down"/>
                </Cta>
            </Content>
        </Container>
     )
};

export default Landing;

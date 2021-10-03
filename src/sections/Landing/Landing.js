import React, { useEffect, useState  } from "react"
import styled from "styled-components"
import landing from '../../assets/landing.jpg'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { scrollTo, toggleBodyScroll } from '../../functions'
import { useWindowSize } from '../../hooks'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    transform-origin: bottom;
    z-index: 3;
    transform-style: preserve-3d;
    ${({ show }) => {
        if(show){
            return {
                '.layer': {
                    opacity: 0
                },
                ".content": {
                    opacity: 1,
                    transform: "translateY(0)"
                },
                ".cta": {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            }
        }
    }}
`

const Layer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: #181818;
    transition: all 1s ease-in;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(35%);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    opacity: 0;
    transform: translateY(5rem);
    transition: all 1s ease-in;
    transition-delay: 1s;

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
    transform: translateY(2rem);
    transition: all 1s ease-in;
    transition-delay: 1.5s;
    opacity: 0;

    svg {
        color: white;
        font-size: 1.6rem;
    }
`

const Landing = () => {

    const {  text } = useSelector(state =>state)

    const [ show, setShow ] = useState(false)

    const scrollHandler = () => {
        scrollTo(`trigger-end`, 1000)
    }

    useEffect(() => {
        toggleBodyScroll(false)
        setTimeout(() => {
            setShow(true)
        },500)
        setTimeout(() => {
            toggleBodyScroll(true)
        },3000)
    },[])

    return (
        <Container show={show}>
            <Layer className="layer"/>
            <Image src={landing}/>
            <Content className="content">
                <MainText>{text.landing_text_a}</MainText>
                <SubText>{text.landing_text_b}</SubText>
                <Cta onClick={scrollHandler} className="cta">
                    <FontAwesomeIcon icon="chevron-down"/>
                </Cta>
            </Content>
        </Container>
     )
};

export default Landing;

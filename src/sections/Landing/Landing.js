import React, { useEffect, useState } from "react"
import styled from "styled-components"
import landing from '../../assets/landing.jpg'
import video from '../../assets/background.mp4'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { scrollTo, toggleBodyScroll } from '../../functions'
import { isMobile } from 'react-device-detect'
import { useWindowSize } from '../../hooks'
import gsap from 'gsap'


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

const Video = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: 1;
    transition: all 1s ease-in;
    filter: brightness(35%);
`

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: 2;
    filter: brightness(35%);
    transition: all .5s ease-in;

`


const Layer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    background: #181818;
    transition: all 1s ease-in;
`


const Content = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 4;
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

    & > .content__text:not(:last-chid){
        margin-bottom: 1rem;
    }
`

const Text = styled.div`
    font-size: 6rem;
    @media screen and (max-width: 1100px){
        font-size: 5rem;
    }
    @media screen and (max-width: 900px){
        font-size: 4rem;
    }
    @media screen and (max-width: 685px){
        font-size: 3.5rem;
        padding: 0 1.5rem;
        text-align: center;
    }
    @media screen and (max-width: 410px){
        font-size: 2.5rem;
    }
`


const Cta = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid white;
    margin-top: 3rem;
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

const Landing = props  => {

    const {  text } = useSelector(state =>state)
    const { disableLandingAnimation, setDisabledLandingAnimation } = props
    const [ show, setShow ] = useState(false)
    const { windowWidth } = useWindowSize()

    useEffect(() => {
        toggleBodyScroll(false)
        setTimeout(() =>  setShow(true),500)
        playAnimation()
        if(!isMobile || windowWidth > 1200){
            setTimeout(() => {
                toggleBodyScroll(true)
            },2000)
        }
    },[])


    const playAnimation = () => {
        let timeline = gsap.timeline()
        timeline.to("#layer", { opacity: 0, duration: .5 })
        timeline.to("#image", { opacity: 0, duration: 1}, "+=2.5")
        setTimeout(() => {
            playVideo()
        },1000)
    }

    const playVideo = () => {
        const videoEl = document.getElementById("video");
        videoEl.playbackRate = 0.75;
        videoEl.play()
    }

    const scrollHandler = () => {
        if(isMobile){
            toggleBodyScroll(true)
        }
        scrollTo(`trigger-end`, 1000)
        if(isMobile && windowWidth < 1200){
            setTimeout(() => {
                setDisabledLandingAnimation(true)
                window.scrollTo(0,0)
            },1000)
        }
    }

    if(disableLandingAnimation){
        return null
    }

    return (
        <Container show={show}>
            <Layer id="layer"/>
            <Video muted loop playsinline id="video">
                <source src={video} type="video/mp4" />
            </Video>
            <Image src={landing} id="image"/>
            <Content className="content">
                <Text className="content__text">{text.landing_text_a}</Text>
                <Text className="content__text">{text.landing_text_b}</Text>
                <Cta onClick={scrollHandler} className="cta">
                    <FontAwesomeIcon icon="chevron-down"/>
                </Cta>
            </Content>
        </Container>
     )
};

export default Landing;

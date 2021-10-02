import React, {useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from 'react-redux'
import styled, { ThemeProvider } from "styled-components";
import Landing from "./sections/Landing/Landing";
import { useWindowSize } from './hooks'
import { theme } from './theme'
import * as actions from './store/actions'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import gsap from 'gsap';
import { Timeline } from 'react-gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import AppAnimation from './AppAnimation'
import Intro from './sections/Intro/Intro'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import ContactCta from './sections/ContactCta/ContactCta'
import ContactMe from './sections/ContactMe/ContactMe'
import AboutMe from './sections/AboutMe/AboutMe'
import SideBars from './elements/Sidebars/SideBars'
import Logo from './elements/Logo'
import Navbar from './elements/Navbar'

gsap.registerPlugin(ScrollTrigger);
library.add(fas);

const Container = styled.div`
    width: 100vw;
    perspective: 150rem;
    perspective-origin: 58% 33%;
`

const AnimationContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: ease;
    transform-style: preserve-3d;
`

const LandingContainer = styled(AnimationContainer)`
    transform-origin: bottom;
    z-index: 3;
`

const ContentContainer = styled(AnimationContainer)`
    transform-origin: top;
    z-index: ${({ inFront }) => inFront ? 4 : 1};
`


const Trigger = styled.div`
    position: absolute;
    right: 0;

    &.trigger-start {
        top: 0;
    }
    &.trigger-end {
        top: 100vh;
    }
`


const Appp = () => {

    const dispatch = useDispatch()
    const { windowHeight } = useWindowSize()
    const { text, locale } = useSelector(state => state)
    const [ scroll, setScroll ] = useState(0)
    
    useEffect(() => {
        document.addEventListener("scroll", listen)
        return () => {
            document.removeEventListener("scroll", listen);
        };
    },[])

    useEffect(() => {
        dispatch(actions.setText(locale))
    },[locale])

    const listen = () => {
        const scrollY = window.pageYOffset
        setScroll(scrollY)
    }

    if(!text){
        return null
    }


    const displayContent = scroll >= windowHeight

    return (
        <ThemeProvider  theme={theme}>
            <SideBars scroll={scroll} />
            <Logo />
            <Navbar />
            <Container>
                <Timeline
                    target={(
                        <>
                            <LandingContainer className="landing" id="landing">
                                <Landing />
                            </LandingContainer>
                            <ContentContainer inFront={scroll >= windowHeight / 2}>
                                <Intro />
                            </ContentContainer>
                        </>
                    )}
                >
                    <AppAnimation setScroll={setScroll}/>
                    <Trigger className="trigger-start" />
                    <Trigger className="trigger-end" />
                </Timeline>
                {displayContent && (
                    <>
                        <Projects scroll={scroll} />
                        <Skills />
                        <AboutMe />
                        <ContactCta />
                        {/* <ContactMe /> */}
                    </>
                )}
            </Container>
        </ThemeProvider>
    )
};

export default Appp;

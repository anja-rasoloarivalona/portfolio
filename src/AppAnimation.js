import React, {useState, useEffect, useRef } from "react"
import { useWindowSize } from './hooks'
import styled from 'styled-components'
import gsap from 'gsap'
import { Tween, Timeline } from 'react-gsap'
import { useSelector, useDispatch } from 'react-redux'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import AboutMe from './sections/AboutMe/AboutMe'
import ContentSection from './sections/Content/Content'
import Intro from './sections/Intro/Intro'
import * as actions from './store/actions'
gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  width: 100vw;
  perspective: 150rem;
  height: 200vh;
  position: relative;
  background: ${props => props.theme.lightGrey};
  perspective-origin: 58% 33%;
`
const Trigger = styled.div`
  position: absolute;
  right: 0;

  &.trigger-start {
    top: 0;
  }
  &.trigger-end {
    top: 200vh;
  }
`

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: ease;
  scroll-snap-align: end;
  transform-style: preserve-3d;
`

const IntroContainer = styled(Content)`
  transform-origin: bottom;
  z-index: 3;

  ${props => {
    if(props.currentSection === "aboutMe"){
      return {
        transformOrigin: "right",
      }
    }
  }}

  ${props => {
    if(props.introIsBehind){
      return {
        zIndex: 1
      }
    }
  }}
`


const ProjectContainer = styled(Content)`
  background: red;
  transform-origin: top;
  z-index: 1;
  opacity: ${props => props.currentSection === "aboutMe" ? 0 : 1};

`

const AboutMeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 100%;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  transform-origin: left;
  transform: rotateY(90deg);
  display: ${props => props.currentSection === "aboutMe" ? "initial" : "none"};
`


const AppAnimation = props => {
    const { scroll, setScroll,scrollHandler  } = props

    const  dispatch = useDispatch()
    const { currentSection } = useSelector(s => s)
    const { windowHeight } = useWindowSize()
    const triggerEnd = useRef()

    const [ introIsBehind, setIntroIsBehind ] = useState(false)

    const trigger = {
      trigger: '.intro',
      markers: false,
      scrub: 0.1
    }

    useEffect(() => {
        document.addEventListener("scroll", listen)
        return () => {
            document.removeEventListener("scroll", listen);
        };
    }, [])

    useEffect(() => {
      if(scroll === 0){
        dispatch(actions.setCurrentSection("intro"))
      }
      if(scroll === windowHeight){
        dispatch(actions.setCurrentSection("content"))
      }
    },[scroll])

    useEffect(() => {
      if(currentSection === "aboutMe"){
        showAboutMe()
      }
    },[currentSection])


    const showAboutMe = () => {
      setTimeout(() => {
        setIntroIsBehind(true)
      },750)
      const d = 1
      let aboutMeTl = gsap.timeline()
      let introTl  = gsap.timeline()
      aboutMeTl.to('#aboutMe', {scale: ".7", x: "-50%", rotationY: 45, duration: d })
      introTl.to("#intro", {scale: ".7", rotationY: -45, x: "-50%", duration: d })
      aboutMeTl.to('#aboutMe', {scale: "1", x: "-100%", rotationY: 0, duration: d },'-=.5')
      introTl.to("#intro", {scale: "1", rotationY: -90, x: "-100%", duration: d },'-=.5')
      aboutMeTl.play()
      introTl.play()
    }

    const listen = () => {
      const scrollY = window.pageYOffset
      setScroll(scrollY)
    }



    return (
      <Container currentSection={currentSection}>
        <Timeline
          target={
            <>               
              <IntroContainer
                className=".intro"
                id="intro"
                introIsBehind={introIsBehind}
                currentSection={currentSection}
              >
                <Intro
                  scrollHandler={scrollHandler}
                />
              </IntroContainer>
              <ProjectContainer
                currentSection={currentSection}
              >
                <ContentSection 
                    scroll={scroll}
                    scrollHandler={scrollHandler} 
                />
              </ProjectContainer>
              <AboutMeContainer
                  id="aboutMe"
                  currentSection={currentSection}
                >
                  <AboutMe 
                    setIntroIsBehind={setIntroIsBehind}
                  />
              </AboutMeContainer>
            </>
          }
        >
        <Tween 
          to={{ 
            rotateX: 90,
            scrollTrigger: { ...trigger, start: '2px', end: `${windowHeight - 10}px`}
          }}
          target={0} 
        />
        <Tween 
          to={{ 
            y: (windowHeight * .2) * -1,
            scale: 0.7,
            scrollTrigger: {...trigger, start: '2px', end: `${windowHeight / 2 - 10}px`}
          }}
          target={0} 
        />
        <Tween
          from={{}} 
          to={{ 
            y: 0,
            scale: 1,
            scrollTrigger: {...trigger, start: `${windowHeight / 2}px`, end: `${windowHeight - 10}px`}
          }}
          target={0} 
        />
        <Tween 
          from={{ rotateX: -90 }}
          to={{
            rotateX: 0, 
            scrollTrigger: {...trigger, start: '2px', end: `${windowHeight - 10}px`}
          }}
          target={1} 
        />
        <Tween 
          to={{
            y: (windowHeight * .2) * -1,
            scale: 0.7, 
            scrollTrigger: {...trigger, start: '2px', end: `${windowHeight / 2 - 10}px`}
          }}
          target={1} 
        />
        <Tween 
          from={{}} 
          to={{
            y: 0,
            scale: 1, 
            scrollTrigger: {...trigger, start: `${windowHeight / 2}`, end: `${windowHeight - 10}px`}
          }}
          target={1} 
        />
      </Timeline>
        <Trigger className="trigger-start" />
        <Trigger className="trigger-end" ref={triggerEnd}/>
      </Container>
     )
};

export default AppAnimation;

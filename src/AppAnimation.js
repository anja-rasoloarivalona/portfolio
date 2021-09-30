import React, {useState, useEffect, useRef } from "react"
import { useWindowSize } from './hooks'
import styled from 'styled-components'
import gsap from 'gsap'
import { Tween, Timeline } from 'react-gsap'
import { useSelector, useDispatch } from 'react-redux'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
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
`

const ProjectContainer = styled(Content)`
  background: red;
  transform-origin: top;
  z-index: 1;

`

const AppAnimation = props => {
    const { scroll, setScroll,scrollHandler  } = props

    const  dispatch = useDispatch()
    const { currentSection } = useSelector(s => s)
    const { windowHeight } = useWindowSize()


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


    const listen = () => {
      const scrollY = window.pageYOffset
      setScroll(scrollY)
    }

    return (
      <Container currentSection={currentSection}>
        <Timeline
          target={
            <>               
              <IntroContainer className=".intro" id="intro" currentSection={currentSection}>
                <Intro scrollHandler={scrollHandler} />
              </IntroContainer>
              <ProjectContainer currentSection={currentSection}>
                <ContentSection scroll={scroll} scrollHandler={scrollHandler} />
              </ProjectContainer>
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
        <Trigger className="trigger-end" />
      </Container>
     )
};

export default AppAnimation;

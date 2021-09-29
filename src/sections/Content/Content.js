import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { ScrollBar } from '../../components'
import { isFirefox  } from 'react-device-detect'
import { useWindowSize } from '../../hooks'
import Projects from '../Projects/Projects'
import { useSelector } from 'react-redux'

const Container = styled(ScrollBar)`
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.blue};
    color: ${props => props.theme.white};
    position: relative;
    transition: ease;
    scroll-snap-align: end;
    transform-origin: top;
    z-index: 1;
    overflow: hidden;

    ${props => {
        if(props.isScrolling){
            return {
                "overflow":  isFirefox ? "auto" : "overlay"
            }
        }
    }}
`

const Content = props => {


    const { currentSection } = useSelector(s => s)

    const { scrollHandler, scroll } = props
    const { windowHeight } = useWindowSize()
    const [ direction, setDirection ] = useState("down")
    const [ projectScroll, setProjectScroll ] = useState(0)

    const onScroll = e => {
        setProjectScroll(prev => {
            if(prev >= e.target.scrollTop){
                setDirection("up")
            } else {
                setDirection("down")
            }
            return e.target.scrollTop
        })
    }

    return (
        <Container
            isScrolling={currentSection === "content" && scroll === windowHeight}
            onScroll={onScroll}
        >
            <Projects />
        </Container>
     )
};

export default Content;

import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Container = styled.div`
    position: absolute !important;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    overflow: hidden;
    ${({ t1, t2 }) => {
        let pos = 0
        if(t1) pos = 100
        if(t2) pos = 201
        return {
            "> *": {
                transform: `translateX(${pos}%)`
            }
        }
    }}
`
const Slide = styled.div`
    position: absolute !important;
    width: 100%;
    height: 100%;
    z-index: 2;
    top: 0;
    transition: all .5s ease-out;

    &.first {
        left: 0;
        background: ${({ theme }) => theme.lightBlue};
    }
    
    &.second {
        left: -100%;
        background: ${({ theme }) => theme.lightGrey};
    }
`


const SlideAnimation = props => {

    const { trigger } = props

    const [ t1, setT1] = useState(null)
    const [ t2, setT2 ] = useState(false)

      useEffect(() => {
        if(trigger){
            setT1(true)
        }
    },[trigger])

    useEffect(() => {
        if(t1){
            setTimeout(() => {
                setT2(true)
            },750)
        }
    },[t1])

    return (
        <Container t1={t1} t2={t2}>
            <Slide className="first"/>
            <Slide className="second"/>
        </Container>
     )
};

export default SlideAnimation;

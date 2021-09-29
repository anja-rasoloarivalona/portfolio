import React from "react"
import styled from "styled-components"
import gsap from 'gsap'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions'

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: ${props => props.theme.blue};
    color: ${props => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
`

const AboutMe = props => {

    const { setIntroIsBehind } = props

    const  dispatch = useDispatch()

    const hideAboutMe = () => {
        setTimeout(() => {
            setIntroIsBehind(false)
         },750)
        const d = 1
        let aboutMeTl = gsap.timeline()
        let introTl  = gsap.timeline()
        aboutMeTl.to('#aboutMe', {scale: ".7",  x: "-50%", rotationY: 45, duration: d })
        introTl.to("#intro", {scale: ".7", rotationY: -45, x: "-50%", duration: d })
        aboutMeTl.to('#aboutMe', {scale: "1", x: "0%", rotationY: 90, duration: d },'-=.5')
        introTl.to("#intro", { scale: "1", rotationY: -0, x: "0%", duration: d },'-=.5')
        aboutMeTl.play()
        introTl.play()
        setTimeout(() => {
            dispatch(actions.setCurrentSection("intro"))
        },1500)
    }

    return (
        <Container>
            <button onClick={hideAboutMe}>
                Back
            </button>
        </Container>
     )
};

export default AboutMe;

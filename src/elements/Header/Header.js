import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Logo from './Logo'
import Navbar from "./Navbar"
import { useScroll, useWindowSize } from '../../hooks'

const Container = styled.div`
    width: 100vw;
    height: 6.4rem;
    position: fixed;
    top: ${({ show }) => show ? 0 : -6.4}rem;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem;
    transition: all .3s ease-in;
    ${({ useBar, theme }) => {
        if(useBar){
            return {
                boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
                background: theme.lightBlue
            }
        }
    }}
`

const Header = props => {

    const { showContent, showContact, setShowContact, disableLandingAnimation } = props

    const [ show, setShow ] = useState(showContent)
    const { scrollY, scrollDirection } = useScroll()
    const { windowWidth, windowHeight } = useWindowSize()


    // useEffect(() => {
    //     if((showContent || showContact) && !show){
    //         setShow(true)
    //     }
    //     if(!showContent && !showContact && show){
    //         setShow(false)
    //     }
    // }, [showContent, showContact])


    useEffect(() => {
        
        const triggerPos =  windowHeight

        // console.log({
        //     scrollDirection,
        //     show,
        //     showContact,
        //     showContent,
        //     scrollY,
        //     triggerPos,
        // })

        if(showContact || (showContent && windowWidth > 1200)){
            setShow(true)
        } else {        
            if(windowWidth <= 1200 && scrollY >= triggerPos){
                if(scrollDirection === "up" && show){
                    setShow(false)
                }
                if(scrollDirection === "down" && !show){
                    setShow(true)
                }
            }
        }
        
    }, [scrollY, scrollDirection, windowWidth, windowHeight, disableLandingAnimation, showContent, showContact])


    return (
        <Container
            show={show}
            useBar={windowWidth <= 1200 && show}
        >
            <Logo />
            <Navbar 
                showContact={showContact} 
                setShowContact={setShowContact}
            />
        </Container>
     )
};

export default Header;

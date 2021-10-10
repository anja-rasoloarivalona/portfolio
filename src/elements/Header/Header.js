import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Logo from './Logo'
import Navbar from "./Navbar"
import { useScroll, useWindowSize } from '../../hooks'
import { isMobile } from 'react-device-detect'

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
    const { showContent, showContact, setShowContact } = props
    const [ show, setShow ] = useState(showContent)
    const [ showMenu, setShowMenu ] = useState(false)
    const [ isMobileInitialized, setIsMobileInitialized ] = useState(false)
    const { scrollY, scrollDirection } = useScroll()
    const { windowWidth } = useWindowSize()

    useEffect(() => {
        if(!isMobile || windowWidth > 1200){
            if(showContact || showContent || showMenu){
                setShow(true)
            } else {
                setShow(false)
            }
        } else {
            if(showContact || showContent || showMenu){
                if(!isMobileInitialized){
                    setIsMobileInitialized(true)
                    setShow(true)
                } else {
                    if(showContact || showMenu){
                        setShow(true)
                    } else {
                        if(scrollY > 0){
                            if(scrollDirection === "up" && show){
                                setShow(false)
                            }
                            if(scrollDirection === "down" && !show){
                                setShow(true)
                            }
                        }
                    }
                }
            }
        }
    },[showContact, showContent, showMenu, scrollY ])


    return (
        <Container
            show={show}
            useBar={windowWidth <= 1200 && show}
        >
            <Logo />
            <Navbar 
                showContact={showContact} 
                setShowContact={setShowContact}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
            />
        </Container>
     )
};

export default Header;

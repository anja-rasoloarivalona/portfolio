import React from "react"
import styled from "styled-components"
import Logo from './Logo'
import Navbar from "./Navbar"

const Container = styled.div`
    width: 100vw;
    height: 6.4rem;
    position: fixed;
    top: ${({ showContent }) => showContent ? 0 : -6.4}rem;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem;
    transition: all .3s ease-in;
`

const Header = props => {
    const { showContent, showContact, setShowContact } = props
    return (
        <Container showContent={showContent}>
            <Logo 
                showContent={showContent}
            />
            <Navbar 
                showContact={showContact} 
                setShowContact={setShowContact}
                showContent={showContent}
            />
        </Container>
     )
};

export default Header;

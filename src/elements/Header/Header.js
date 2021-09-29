import React from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import LocaleSelector from "./LocaleSelector"

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 6rem;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5rem;
`

const Logo = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Section = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.4rem;
`

const SectionItem = styled.div`
    margin-left: 1rem;
`

const Header = () => {
    return (
        <Container>
            <Logo>A</Logo>
            <Section>
                {/* <SectionItem>Projects</SectionItem> */}
                <SectionItem>
                    <LocaleSelector />
                </SectionItem>
            </Section>
        </Container>
     )
};

export default Header;

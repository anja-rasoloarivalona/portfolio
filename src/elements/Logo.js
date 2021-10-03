import React  from "react"
import styled from "styled-components"

const Container = styled.div`
    position: fixed;
    top: ${({ show }) => show ? 2.5 : -4}rem;
    left: 4rem;
    z-index: 3;
    transition: all .3s ease-in;
`

const Name = styled.div`
    font-weight: 700;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.green};
    cursor: pointer;
`

const Logo = props => {
    const { showContent } = props

    const reloadHandler = () => {
        window.location.reload();
    }

    return (
        <Container show={showContent}>
            <Name onClick={reloadHandler}>
                Anja.
            </Name>
        </Container>
     )
};

export default Logo;

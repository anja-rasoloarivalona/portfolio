import React  from "react"
import styled from "styled-components"

const Container = styled.div`
    transition: all .3s ease-in;
    position: relative;
    z-index: 4;
`

const Name = styled.div`
    font-weight: 700;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.green};
    cursor: pointer;
`

const Logo = () => {
    const reloadHandler = () => {
        window.location.reload();
    }
    return (
        <Container>
            <Name onClick={reloadHandler}>
                Anja.
            </Name>
        </Container>
     )
};

export default Logo;

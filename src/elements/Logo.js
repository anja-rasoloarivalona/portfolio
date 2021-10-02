import React from "react"
import styled from "styled-components"

const Container = styled.div`
    position: fixed;
    top: 2.5rem;
    left: 4rem;
    z-index: 3;
`

const Name = styled.div`
    font-weight: 700;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.green};
`

const Logo = () => {
    return (
        <Container>
            <Name>
                Anja.
            </Name>
        </Container>
     )
};

export default Logo;

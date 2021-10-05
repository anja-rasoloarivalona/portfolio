import React from "react"
import styled from "styled-components"
import { Wrapper , Bar } from './style'

const Container = styled(Wrapper)`
    right: 0;
    top: calc(100vh + 4rem);
    transition: all .3s ease-in;

    ${({ show }) => {
        if(show){
            return {
                top: "calc(100vh - 25rem)"
            }
        }
    }}
`

const EmailContainer = styled.div`
    height: 15rem;
    width: 6rem;
    position: relative;
`

const Email = styled.a`
    position: absolute;
    top: -4rem;
    left: 100%;
    width: 19rem;
    height: 6rem;
    transform: rotate(90deg);
    transform-origin: top left;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    padding-right: 4rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.darkGrey} !important;
    cursor: pointer;
    text-decoration: none !important;

    :hover {
        color: ${({ theme }) => theme.green} !important;
    }

`

const RightBar = props => {

    const { show } = props

    return (
        <Container show={show}>
            <EmailContainer>
                <Email href="mailto:rasoloanja@gmail.com">
                    rasoloanja@gmail.com
                </Email>
            </EmailContainer>
            <Bar />
        </Container>
     )
};

export default RightBar;

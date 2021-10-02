import styled from "styled-components"

const Wrapper = styled.div`
    position: fixed;
    width: 10rem;
    z-index: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Bar = styled.div`
    width: 2px;
    background: ${({ theme }) => theme.darkGrey};
    height: 10rem;
`

export {
    Wrapper,
    Bar
}
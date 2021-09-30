import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    height: 34rem;
    margin-bottom: 20vh;

    ${({ leftText }) => {
        if(leftText){
            return {
                justifyContent: "flex-start",
                ".image-container": {
                    right: 0,
                    left: "unset"
                },
                ".content": {
                    alignItems: "flex-start"
                }
            }
        }
    }}
`

const ImageContainer = styled.div`
    position: absolute;
    width: 63%;
    height: 100%;
    left: 0;
    top: 0;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: .5rem;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 60%;
    height: 100%;
    position: relative;
    z-index: 2;
`

const Title = styled.div`
    color: ${props => props.theme.white};
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.4;
`

const SubTitle = styled.div`
    color: ${props => props.theme.green};
    font-size: 1.5rem;
    line-height: 1.4;
`

const Text = styled.div`
    margin: 2rem 0;
    background: ${props => props.theme.lightBlue};
    font-size: 1.4rem;
    padding: 2rem;
    line-height: 1.6;
    color: ${props => props.theme.brightGrey};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: .8rem;
`

const Cta = styled.div`
    margin-top: 1rem;
    position: relative;
`

const CtaButton = styled.div`
    border: 1px solid ${props => props.theme.green};
    color: ${props => props.theme.green};
    padding: 1rem 2rem;
    font-size: 1.4rem;
    border-radius: .5rem;
    transition: all .3s linear;
    cursor: pointer;
    :hover {
        background: ${props => props.theme.greenTransparent};
    }
`

const CtaIcon = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 90%;
    margin: auto;
    z-index: 2;
    display: flex;
    align-items: center;

    svg {
        font-size: 1.4rem;
    }
`

const CtaIconBar = styled.div`
    width: 3rem;
    height: 2px;
    background: ${props => props.theme.lightGrey};
`

const Project = props => {

    const {image, subtitle, title, text, technologies, index } = props
    const leftText = index % 2 !== 0

    return (
        <Container leftText={leftText}>
            <ImageContainer className="image-container">
                <Image src={image}/>
            </ImageContainer>
            <Content className="content">
                <SubTitle>{subtitle}</SubTitle>
                <Title>{title}</Title>
                <Text>{text}</Text>
                <Cta>
                    <CtaButton>
                        Case study
                    </CtaButton>
                    <CtaIcon>
                        <CtaIconBar />
                        <FontAwesomeIcon icon="chevron-right"/>
                    </CtaIcon>
                </Cta>
            </Content>
        </Container>
     )
};

export default Project;

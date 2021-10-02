import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SlideAnimation from '../../components/SlideAnimation'
import { useWindowSize } from '../../hooks'

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

    * {
        position: relative;
    }
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
    opacity: 0;
    transform: scale(.8);
    transition: all .5s linear;
    transition-delay: .5s;

    ${({ trigger }) => {
        if(trigger){
            return {
                opacity: 1,
                transform: "scale(1)"
            }
        }
    }}
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
    margin-bottom: 2px;
`

const Text = styled.div`
    margin: 2rem 0;
    background: ${props => props.theme.lightBlue};
    font-size: 1.4rem;
    padding: 2rem;
    line-height: 1.6;
    color: ${props => props.theme.brightGrey};
    border-radius: .8rem;
    transition-delay: 1s;

    &.show {
        transition: all .3s ease-in;
        transition-delay: 1s;
        box-shadow: ${props => props.theme.boxShadow};
        background: ${props => props.theme.blue};
    }
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

const Trigger = styled.div`
    position: absolute;
    top: ${({ windowHeight }) => `-${windowHeight * .75}px`};
    left: 0;
    width: 100%;
    height: 0px;
`

const Project = props => {

    const [triggerAnimation, setTriggerAnimation ] = useState(false)

    const { windowHeight } = useWindowSize()

    const {image, subtitle, title, text, technologies, index, scroll } = props
    const leftText = index % 2 !== 0
    const id = `project-${index}`


    useEffect(() => {
        const el = document.getElementById(id)
        const elDom = el.getBoundingClientRect()
        if(elDom.top <= 0){
            setTriggerAnimation(true)
        }
    },[scroll])

    return (
        <Container leftText={leftText}>
            <Trigger windowHeight={windowHeight} id={id}/>
            <ImageContainer className="image-container">
                <Image src={image} trigger={triggerAnimation} />
            </ImageContainer>
            <Content className="content">
                <SubTitle>
                    {subtitle}
                    <SlideAnimation trigger={triggerAnimation}/>
                </SubTitle>
                <Title>
                    {title}
                    <SlideAnimation trigger={triggerAnimation}/>
                </Title>
                <Text className={triggerAnimation ? "show" : ""}>
                    {text}
                    <SlideAnimation trigger={triggerAnimation}/>
                </Text>
                <Cta>
                    <SlideAnimation trigger={triggerAnimation}/>
                    <CtaButton>
                        Case study
                    </CtaButton>
                    {/* <CtaIcon>
                        <CtaIconBar />
                        <FontAwesomeIcon icon="chevron-right"/>
                    </CtaIcon> */}
                </Cta>
            </Content>
        </Container>
     )
};

export default Project;

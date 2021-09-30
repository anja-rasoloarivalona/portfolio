import React, { useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.theme.lightBlue};
    position: relative;
    z-index: 2;
    padding-top: 15%;
    overflow: hidden;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const IntroText = styled.div`
    font-size: 1.6em;
    font-weight: 400;
    color: ${props => props.theme.green};
`

const Title = styled.div`
    font-size: 8rem;
    font-weight: 700;
    color: ${props => props.theme.white};
    line-height: 1.5;
`

const SubTitle = styled.div`
    font-size: 4rem;
    font-weight: 600;
    color: ${props => props.theme.lightGrey};
`

const Cta = styled.div`
    margin-top: 3rem;
    position: relative;

    svg {
        color: ${props => props.theme.lightGrey};
    }
`

const CtaButton = styled.div`
    padding: 1rem 2rem;
    border: 1px solid ${props => props.theme.green};
    color: ${props => props.theme.green};
    transition: all .3s ease-in;
    font-size: 1.6rem;
    border-radius: .5rem;
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


const Project = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all .3s linear;
    
    ${props => {
        if(props.hovered){
            return {
                transform: "translateY(-1rem)",
                ".button": {
                    borderColor: props.theme.white,
                },
                ".bar": {
                    background: props.theme.white,
                },
                ".arrow": {
                    transform: "translateY(2.5rem)"
                }
            }
        }
    }}
`

const ProjectButton = styled.div`
    padding: 1rem 2rem;
    background: transparent;
    border: 1px solid  transparent;
    border-radius: .5rem;
    color: ${props => props.theme.lightGrey};
    font-size: 2rem;
    cursor: pointer;
    position: relative;
    transition: all .3s linear;
    :hover {
        color: ${props => props.theme.white};
        border: 1px solid  ${props => props.theme.white};
    }
`

const ProjectBar = styled.div`
    width: 1px;
    height: 12rem;
    background: ${props => props.theme.brightBlue};
    transition: all .3s linear;
`
const ProjectArrow = styled(FontAwesomeIcon)`
    font-size: 3rem;
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    margin: auto;
    color: ${props => props.theme.white};
    transform: translateY(4rem);
    transition: all .3s linear;
`


const Home = props => {
    const { scrollHandler } = props

    const dispatch = useDispatch()

    const [ hovered, setHovered ] = useState(false)
    const { text } = useSelector(s => s)

    return (
        <Container>
            <Content>
                <IntroText>{text.intro_hi}</IntroText>
                <Title>
                    Anja Rasoloarivalona.
                </Title>
                <SubTitle>
                    {text.intro_i_am}
                </SubTitle>
                <Cta>
                    <CtaButton onClick={() => dispatch(actions.setCurrentSection("aboutMe"))}>
                        {text.about_me}
                    </CtaButton>
                    <CtaIcon>
                        <CtaIconBar />
                        <FontAwesomeIcon icon="chevron-right"/>
                    </CtaIcon>
                </Cta>
            </Content>
      
            {/* <Project
                hovered={hovered}
                onMouseLeave={() => setHovered(false)}
            >
                <ProjectButton
                    onClick={() => scrollHandler("end")}
                    onMouseEnter={() => setHovered(true)}
                    className="button"
                >
                    {text.projects}
                </ProjectButton>
                <ProjectBar className="bar"/>
                <ProjectArrow icon="chevron-down" className="arrow"/>
            </Project> */}
        </Container>
     )
};

export default Home;

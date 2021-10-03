import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector } from 'react-redux'
import Icon from '../../icons'
import gsap from 'gsap'
import { useWindowSize } from '../../hooks'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: ${({ theme }) => theme.lightBlue};

    * {
        line-height: 1.4;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    border-radius: .5rem;
`

const Header = styled.div`
    width: 100%;
    max-width: 50rem;
    display: flex;
    align-items: center;
    margin-bottom: 10rem;
`

const HeaderTitle = styled.div`
    width: max-content;
    margin: 0 1.5rem;
    font-size: 3rem;
    font-weight: 700;
    color: ${props => props.theme.brightGrey};
`

const HeaderBar = styled.div`
    flex: 1;
    height: 1px;
    background: ${props => props.theme.brightBlue};
`

const Sections = styled.div`
    display: flex;
    width: 113rem;
    height: 80vh;
    max-height: 56rem;
    position: relative;
`

const Section = styled.div`
    width: 35rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 4rem 2rem;
    background: white;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: .5rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
    transition: all .3s linear;

    &#front-end {
        right: 0;
        margin: auto;
        z-index: 4;
    }

    &#back-end {
        z-index: 3;
    }

    &#tools {
        z-index: 2;
    }
`

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        width: 4rem;
        height: 4rem;
        fill: ${({ theme }) => theme.brightBlue};
    }
`

const Title = styled.div`
    font-size: 2.2rem;
    font-weight: bold;
    margin: 2rem 0;
    text-align: center;
    color: ${({ theme }) => theme.brightBlue};
`

const SubTitle = styled.div`
    font-size: 1.6rem;
    margin-bottom: 4rem;
    text-align: center;
    line-height: 1.6;
`

const List = styled.ul`
    list-style: none;
`
const ListItem = styled.li`
    text-align: center;
    font-size: 1.6rem;
    margin-bottom: 1rem;
`

const Skills = props => {

    const { scroll } = props

    const {
        text
    } = useSelector(state => state)

    const [ played, setPlayed ] = useState(false)
    const el = document.getElementById("skills")
    const { windowHeight } = useWindowSize()

    useEffect(() => {   
        if(el && !played){
            const elDom = el.getBoundingClientRect()
            if(elDom.top <= windowHeight * .7){
                playAnimation()
                setPlayed(true)
            }
        } 
    },[scroll])

    const sections = [
        {
            id: "front-end",
            title: text.front_end,
            subTitle: text.skills_front_end_subtitle,
            list: [
                "ES6 - Javascript", "React - Redux", "React Native", "Vue.js", "Elastic Search", "jQuery", "CSS / Sass"
            ]
        },
        {
            id: "back-end",
            title: text.back_end,
            subTitle: text.skills_back_end_subtitle,
            list: [
                "Node.js", "Express", "SQL", "MongoDB", "graphQL", "SendGrid", "Socket"
            ]
        },
        {
            id: "tools",
            title: text.tools,
            subTitle: text.skills_tools_subtitle,
            list: [
                "Heroku", "Git", "GitLab", "BitBucket", "Visual Studio Code", "HeidiSQL"
            ]
        }
    ]

    const playAnimation = () => {
        const d = .3
        let front = gsap.timeline()
        let back  = gsap.timeline()
        let tools = gsap.timeline()
        front.from('#front-end', {scale: 4, y: 1000 })
        front.to('#front-end', {scale: "1", opacity: 1, y: 0, duration: d})
        front.to('#front-end', {x: -390, duration: d / 2 }, `+=${d/2}`)
        back.to('#back-end', {opacity: 1, duration: 0 }, `+=${d * 5}`)
        tools.to('#tools', {opacity: 1,  duration: 0 }, `+=${d * 5}`)
        back.to('#back-end', { x: 390, duration: d })
        tools.to('#tools', { x: 780, duration: d })
    }

    return (
        <Container id="skills">
            <Content>
                <Header>
                    <HeaderBar  />
                    <HeaderTitle>{text.my_skills}</HeaderTitle>
                    <HeaderBar  />
                </Header>
                <Sections>
                    {sections.map(section => (
                        <Section key={section.id} id={section.id}>
                            <IconContainer>
                                <Icon icon={section.id}/>
                            </IconContainer>
                            <Title>{section.title}</Title>
                            <SubTitle>{section.subTitle}</SubTitle>
                            <List>
                                {section.list.map((listItem, index) => (
                                    <ListItem key={index}>
                                        {listItem}
                                    </ListItem>
                                ))}
                            </List>
                        </Section>
                    ))}
                </Sections>
            </Content>
        </Container>
     )
};

export default Skills;

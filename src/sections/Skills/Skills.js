import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector } from 'react-redux'
import Icon from '../../icons'
import gsap from 'gsap'
import { useWindowSize } from '../../hooks'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    @media screen and (max-width: 1325px){
        height: unset;
        min-height: 100vh;
    }

    @media screen and (max-height: 700px){
        padding-top: 20vh;
    }

    @media screen and (max-width: 610px){
        padding-top: 15vh;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    border-radius: .5rem;
    @media screen and (max-width: 1325px){
        height: max-content;
    }
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

    @media screen and (max-width: 1325px){
        position: relative;
        margin: unset;
        opacity: 1;
        width: 100%;
        max-width: 35rem;
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

const SliderContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 700px;
    
    .slick-track {
        display: flex !important;
        > div {
            height: 100%;
            > div {
                height: 100%;
            }
        }
    }

    .slick-list {
        width: calc(100vw - 15rem);
        @media screen and (max-width: 1200px) {
            width: 100vw;
        }
    }

    .slick-slide {
        height: inherit !important;
        display: flex;
        justify-content: center;

        @media screen and (max-width: 404px) {
            margin: 0 10px;
        }

    }

    .slick-slide {
        margin: 0 2.5rem;
    }

    .slick-list {
        margin: 0 -2.5rem;
    }

    .slick-slide > div{
        width: 100%;
        max-width: 40rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    
    .slick-dots {
        bottom: -50px !important;
    }

    .slick-dots li button:before {
        color: ${({ theme }) =>  theme.brightGrey};
    }

`

const Skills = props => {

    const { scroll } = props
    const {
        text
    } = useSelector(state => state)

    const { windowHeight, windowWidth } = useWindowSize()
    const useMobile = windowWidth <= 1325 

    const [ played, setPlayed ] = useState(false)

    const el = document.getElementById("skills")
    useEffect(() => {   
        if(!useMobile && el && !played){
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

    const mobileSliderSettings = {
        dots: true,
        infinite: false,
        speed: 50,
        slidesToShow: Math.min(windowWidth / 350, 3) >= 1 ? Math.min(windowWidth / 350, 3) : 1,
        slidesToScroll: 1,
        arrows: false,
        swipe: true
    }


    const renderSections = () => {
        return sections.map(section => (
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
        ))
    }

    return (
        <Container id="skills">
            <Content>
                <Header>
                    <HeaderBar  />
                    <HeaderTitle>{text.my_skills}</HeaderTitle>
                    <HeaderBar  />
                </Header>
                {useMobile ?
                    <SliderContainer>
                        <Slider {...mobileSliderSettings}>
                            {renderSections()}
                        </Slider>
                    </SliderContainer> :
                    <Sections>
                        {renderSections()}
                    </Sections>
                }
            </Content>
        </Container>
     )
};

export default Skills;

import React, { useState } from "react"
import styled from "styled-components"
import Sidebar from './Sidebar'
import gsap from 'gsap'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions'

const Container = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    padding-bottom: 4rem;
    padding-top: 10rem;
    background: ${({ theme }) => theme.lightBlue};
    scroll-margin: 0rem;
`
const Content = styled.div`
    width: 95%;
    max-width: 90rem;
`

const Header = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    margin-bottom: 4rem;
`

const HeaderTitle = styled.div`
    width: max-content;
    margin-right: 1.5rem;
    font-size: 3rem;
    font-weight: 700;
    color: ${props => props.theme.brightGrey};
`

const HeaderBar = styled.div`
    flex: 1;
    height: 1px;
    background: ${props => props.theme.brightBlue};
`

const TextContainer = styled.div``

const Text = styled.span`
    font-size: 1.4rem;
    line-height: 1.4;
    text-align: justify;
    color: ${props => props.theme.brightGrey};
`

const ViewContainer = styled.div`
    margin: 4rem 0;
    display: flex;
`

const View = styled.div`
    flex: 1;
    padding-left: 4rem;
    font-size: 1.4rem;
    line-height: 1.4;
    text-align: justify;
    color: ${props => props.theme.brightGrey};

`

const AboutMe = props => {

    const  dispatch = useDispatch()

    const {
        text
    } = useSelector(state => state)

    const data = [
        {
            period: 2014,
            text: "214- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            period: 2018,
            text: "218 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            period: 2020,
            text: "220 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            period: 2021,
            text: "221 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]

    const [ periodIndex, setPeriodIndex ] = useState(0)


    // const hideAboutMe = () => {
    //     setTimeout(() => {
    //         setIntroIsBehind(false)
    //      },750)
    //     const d = 1
    //     let aboutMeTl = gsap.timeline()
    //     let introTl  = gsap.timeline()
    //     aboutMeTl.to('#aboutMe', {scale: ".7",  x: "-50%", rotationY: 45, duration: d })
    //     introTl.to("#intro", {scale: ".7", rotationY: -45, x: "-50%", duration: d })
    //     aboutMeTl.to('#aboutMe', {scale: "1", x: "0%", rotationY: 90, duration: d },'-=.5')
    //     introTl.to("#intro", { scale: "1", rotationY: -0, x: "0%", duration: d },'-=.5')
    //     aboutMeTl.play()
    //     introTl.play()
    //     setTimeout(() => {
    //         dispatch(actions.setCurrentSection("intro"))
    //     },1500)
    // }

    return (
        <Container id="about-me">
            <Content>
                <Header>
                    <HeaderTitle>{text.about_me}</HeaderTitle>
                    <HeaderBar  />
                </Header>
                <TextContainer>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                       
                    </Text>
                </TextContainer>
                <ViewContainer>
                    <Sidebar 
                        periodIndex={periodIndex}
                        setPeriodIndex={setPeriodIndex}
                        data={data}
                    />
                    <View>
                        {data[periodIndex].text}
                    </View>
                </ViewContainer>
            </Content>
        </Container>
     )
};

export default AboutMe;

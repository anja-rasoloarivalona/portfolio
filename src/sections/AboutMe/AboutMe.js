import React, { useState } from "react"
import styled from "styled-components"
import Sidebar from './Sidebar'
import gsap from 'gsap'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions'

const Container = styled.div`
    width: 100vw;
    min-height: 80vh;
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

    @media screen and (max-width: 1000px){
        max-width: unset;
        width: 100%;
        padding: 0 4rem;
    }
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
    color: ${({ theme }) => theme.brightGrey};
`

const HeaderBar = styled.div`
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.brightBlue};
`

const TextContainer = styled.div``

const Text = styled.span`
    font-size: 1.7rem;
    line-height: 1.6;
    text-align: justify;
    font-family: Lato;
    color: ${({ theme }) => theme.darkGrey};
    text-indent: 3rem;
    span {
        color: ${({ theme }) => theme.green}
    }

`

const ViewContainer = styled.div`
    margin: 4rem 0;
    display: flex;
    @media screen and (max-width: 850px){
        flex-direction: column;
    }
`

const View = styled.div`
    flex: 1;
    padding-left: 4rem;
    font-size: 1.7rem;
    line-height: 1.6;
    text-align: justify;
    color: ${({ theme }) => theme.darkGrey};
    text-indent: 3rem;
    font-family: Lato;
    span {
        color: ${({ theme }) => theme.green}
    }
    @media screen and (max-width: 850px){
        text-indent: 0rem;
        padding-left: 0rem;
        min-height: 40vh;
    }
`

const AboutMe = props => {

    const  dispatch = useDispatch()

    const {
        text
    } = useSelector(state => state)

    const data = [
        {
            period: 2014,
            text: text.about_me_2014
        },
        {
            period: 2018,
            text: text.about_me_2018
        },
        {
            period: 2020,
            text: text.about_me_2020
        },
        {
            period: 2021,
            text: text.about_me_2021
        }
    ]

    const [ periodIndex, setPeriodIndex ] = useState(0)

    return (
        <Container id="about-me">
            <Content>
                <Header>
                    <HeaderTitle>{text.about_me}</HeaderTitle>
                    <HeaderBar  />
                </Header>
                <TextContainer>
                    <Text dangerouslySetInnerHTML={{__html: text.about_me_intro }}></Text>
                </TextContainer>
                <ViewContainer>
                    <Sidebar 
                        periodIndex={periodIndex}
                        setPeriodIndex={setPeriodIndex}
                        data={data}
                    />
                    <View dangerouslySetInnerHTML={{__html: data[periodIndex].text}}></View>
                </ViewContainer>
            </Content>
        </Container>
     )
};

export default AboutMe;

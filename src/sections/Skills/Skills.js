import React from "react"
import styled from "styled-components"
import { useSelector } from 'react-redux'
import Icon from '../../icons'

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
    overflow: hidden;
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
    width: 95%;
    max-width: 120rem;
`

const Section = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 4rem 2rem;
    background: white;
    box-shadow: ${({ theme }) => theme.boxShadow};
    margin: 0 2rem;
    border-radius: .5rem;
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
    font-size: 2rem;
    font-weight: bold;
    margin: 2rem 0;
    text-align: center;
    color: ${({ theme }) => theme.brightBlue};
`

const SubTitle = styled.div`
    font-size: 1.4rem;
    margin-bottom: 4rem;
    text-align: center;
`

const List = styled.ul`
    list-style: none;
`
const ListItem = styled.li`
    text-align: center;
    font-size: 1.4rem;
    margin-bottom: 1rem;
`

const Skills = () => {

    const {
        text
    } = useSelector(state => state)


    const sections = [
        {
            id: "front-end",
            title: text.front_end,
            subTitle: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il",
            list: [
                "ES6 - Javascript", "React - Redux", "React Native", "Vue.js", "Elastic Search", "jQuery", "CSS / Sass"
            ]
        },
        {
            id: "back-end",
            title: text.back_end,
            subTitle: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il",
            list: [
                "Node.js", "Express", "SQL", "MongoDB", "graphQL", "SendGrid", "Socket"
            ]
        },
        {
            id: "tools",
            title: text.tools,
            subTitle: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il",
            list: [
                "Git", "GitLab", "BitBucket", "Visual Studio Code"
            ]
        }
    ]

    return (
        <Container>
            <Content>
                <Header>
                    <HeaderBar  />
                    <HeaderTitle>{text.my_skills}</HeaderTitle>
                    <HeaderBar  />
                </Header>
                <Sections>
                    {sections.map(section => (
                        <Section key={section.id}>
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

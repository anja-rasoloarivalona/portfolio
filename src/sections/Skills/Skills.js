import React from "react"
import styled from "styled-components"
import { useSelector } from 'react-redux'
import Icon from '../../icons'

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    position: relative;
    padding-bottom: 6rem;


    * {
        line-height: 1.4;
    }

    :before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 30rem;
        background: ${({ theme }) => theme.lightBlue};
        z-index: 1;
    }
`

const Content = styled.div`
    display: flex;
    position: relative;
    z-index: 2;
    background: white;
    border-radius: .5rem;
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.boxShadow};
`

const Section = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 4rem 2rem;
    width: 30vw;
    max-width: 35rem;
`

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        width: 4rem;
        height: 4rem;
    }
`

const Title = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin: 2rem 0;
    text-align: center;
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
                "ES6 - Javascript", "React - Redux", "React Native", "Vue.js", "jQuery", "CSS / Sass"
            ]
        },
        {
            id: "back-end",
            title: text.back_end,
            subTitle: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il",
            list: [
                "Node.js", "Express", "SQL", "MongoDB", "graphQL"
            ]
        },
        {
            id: "tools",
            title: text.tools,
            subTitle: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il",
            list: [
                "Elastic Search", "GitLab", "BitBucket"
            ]
        }
    ]

    return (
        <Container>
            <Content>
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
            </Content>
        </Container>
     )
};

export default Skills;

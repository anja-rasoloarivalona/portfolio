import React from "react"
import styled from "styled-components"
import Project from './Project'
import { useSelector } from 'react-redux'
import bizbizshare from '../../assets/bizbizshare.PNG'
import woto from '../../assets/woto.PNG'

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    background: ${props => props.theme.lightBlue};
    scroll-margin: 3rem;
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

const Projects = props => {

    const { scroll } = props

    const {
        text
    } = useSelector(state => state)

    const projects = [
        {
            image: bizbizshare,
            title: "BizbizShare",
            subtitle: text.front_end_developper,
            text: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée."
        },
        {
            image: woto,
            title: "Woto motors",
            subtitle: text.personnal_project,
            text: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée."
        }
    ]

    return (
        <Container id="projects">
            <Content>
                <Header>
                    <HeaderTitle>{text.projects_title}</HeaderTitle>
                    <HeaderBar  />
                </Header>

                {projects.map((project, index) => (
                    <Project 
                        key={index}
                        index={index}
                        image={project.image}
                        title={project.title}
                        subtitle={project.subtitle}
                        text={project.text}
                        scroll={scroll}
                    />
                ))}
                
            </Content>
         </Container>
     )
};

export default Projects;

import React from "react"
import styled from "styled-components"
import Project from './Project'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 10rem;
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

const Projects = () => {
    return (
        <Container>
            <Content>
                <Header>
                    <HeaderTitle>Some stuff I've built</HeaderTitle>
                    <HeaderBar  />
                </Header>
                <Project 
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                    title="Monetor"
                    subtitle="Personnal project"
                    text="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée."
                />
            </Content>
         </Container>
     )
};

export default Projects;

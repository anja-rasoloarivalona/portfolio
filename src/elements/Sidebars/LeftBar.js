import React from "react"
import styled from "styled-components"
import { Wrapper, Bar } from './style'
import Icon from '../../icons'
import { useSelector } from 'react-redux'

const Container = styled(Wrapper)`
    left: 0rem;
    top: 100vh;
    transition: all .3s ease-in;

    ${({ show }) => {
        if(show){
            return {
                top: "calc(100vh - 28rem)"
            }
        }
    }}
`
const IconsList = styled.ul`
    list-style: none;
`
const IconsListItem = styled.li`
    
`

const IconsListItemLink = styled.a``

const IconsListItemIconContainer = styled.div`
    width: 4rem;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    
    svg {
        width: 2.5rem;
        height: 2.5rem;
        fill: ${({ theme }) => theme.darkGrey};
        transition: all .3s ease-in;
    };
    :hover {
        svg {
            fill: ${({ theme }) => theme.green};
            transform: translateY(-.5rem) scale(1.1);
        }
        .tooltip {
            transform: scale(1) translateY(-.5rem);
        }
    }
`

const ToolTip = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(100% + 1rem);
    margin: auto;
    transform: scale(0);
    transition: all .3s ease-in;
    width: max-content;
    height: min-content;
    padding: 1rem 1.5rem;
    color: ${({ theme }) => theme.green};
    border: 1px solid ${({ theme }) => theme.green};
    font-size: 1.4rem;
    border-radius: .5rem;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        bottom 0;
        margin: auto;
        left: -.4rem;
        width: 0; 
        height: 0; 
        border-top: .4rem solid transparent;
        border-bottom: .4rem solid transparent; 
        border-right: .4rem solid ${({ theme }) => theme.lightBlue}; 
        z-index: 3;
        transition: all .3s ease-in;
    }

    &:after {
        content: "";
        position: absolute;
        top: 0;
        bottom 0;
        margin: auto;
        left: -.6rem;
        width: 0; 
        height: 0; 
        border-top: .6rem solid transparent;
        border-bottom: .6rem solid transparent; 
        border-right: .6rem solid ${({ theme }) => theme.green}; 
        z-index: 2;
    }

    :hover {
        background: ${({ theme }) => theme.greenTransparent};
        &:before {
            border-right: .8rem solid transparent; 
        }
    }
`

const LeftBar = props => {

    const { show } = props

    const { 
        text
    } = useSelector(state => state)

    const list = [
        {icon: "github", text: "Github", link: "https://github.com/anja-rasoloarivalona"},
        {icon: "linkedin", text: "LinkedIn", link: "https://www.linkedin.com/in/anja-rasoloarivalona/"},
        {icon: "cv", text: text.download_cv},
    ]

    return (
        <Container show={show}>
            <IconsList>
                {list.map((item, index) => (
                    <IconsListItem key={index}>
                        <IconsListItemLink href={item.link} target="_blank" rel="noopener">
                            <IconsListItemIconContainer>
                                <Icon icon={item.icon}/>
                                <ToolTip className="tooltip">
                                    {item.text}
                                </ToolTip>
                            </IconsListItemIconContainer>
                        </IconsListItemLink>
                    </IconsListItem>
                ))}
            </IconsList>
            <Bar />
        </Container>
     )
};

export default LeftBar;

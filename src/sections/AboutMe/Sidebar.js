import React from "react"
import styled from "styled-components"

const List = styled.ul`
    width: 8rem;
    list-style: none;
    position: relative;

    @media screen and (max-width: 850px){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-bottom: 2rem;
    }
`

const ListItem = styled.li`
    font-size: 1.6rem;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${( { theme }) => theme.darkGrey};
    cursor: pointer;
    font-weight: bold;
    :hover {
        color: white;
    }
    ${({ active, theme }) => {
        if(active){
            return {
                color: theme.green + "!important"
            }
        }
    }};

    @media screen and (max-width: 850px){
        width: 100%;
    }
`

const ListScroll = styled.div`
    position: absolute;
    left: 0;
    width: 2px;
    height: 100%;
    background: ${({ theme }) => theme.brightBlue};
    z-index: 1;
    border-radius: .5rem;
    overflow: hidden;

    @media screen and (max-width: 850px){
        bottom: 0;
        width: 100%;
        height: 2px;
    }
`

const ListScrollThumb = styled.div`
    position: absolute;
    width: 100%;
    height: 6rem;
    top: 0;
    left: 0;
    z-index: 2;
    background: ${({ theme }) => theme.green};
    border-radius: .5rem;
    transform: translateY(${({ periodIndex }) => periodIndex * 6}rem);
    transition: all .3s ease-in;

    @media screen and (max-width: 850px){
        width: 25%;
        height: 2px;
        transform: translateX(${({ periodIndex }) => periodIndex * 100}%);
    }
`

const Sidebar = props => {

    const { periodIndex, setPeriodIndex, data } = props

    return (
        <List>
            <ListScroll>
                <ListScrollThumb periodIndex={periodIndex}/>
            </ListScroll>
            {data.map((period, index) => (
                <ListItem active={periodIndex === index} onClick={() => setPeriodIndex(index)}>
                    {period.period}
                </ListItem>
            ))}
        </List>
    )
};

export default Sidebar;

import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector, useDispatch} from 'react-redux'
import * as actions from '../../store/actions'
import ContactMe from '../../sections/ContactMe/ContactMe'

const Container = styled.div`
    ${({ showMenu }) => {
        if(showMenu){
            return {
                ".top, .bottom": {
                    width: 0
                },
                ".mid.left": {
                    transform: "rotate(45deg)"
                },
                ".mid.right": {
                    transform: "rotate(-45deg)"
                },
                ".menu": {
                    top: 0,
                }
            }
        }
    }}
`

const ToggleContainer = styled.div`
    transition: all .3s ease-in;
    position: relative;
    z-index: 4;
`

const Toggle = styled.div`
    width: 3.5rem;
    height: 2.3rem;
    position: relative;
    cursor: pointer;
    :hover {
        * {
            background: ${({ theme }) => theme.white};
        }
    }
`

const ToggleBar = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.brightGrey};
    transition: all .3s ease-in;
    
    &.mid {
        top: 0;
        bottom: 0;
    }

    &.bottom {
        bottom: 0;
    }

    &.top {
        top: 0;
    }
`

const Menu = styled.div`
    position: absolute;
    top: -100vh;
    left: 0;
    z-index: 2;
    background: ${({ theme, useLightBg }) => useLightBg ? theme.lightBlue : theme.darkBlue};
    width: 100vw;
    height: 100vh;
    transition: top .5s linear, background .3s linear;
    display: flex;
    align-items: center;
    justify-content: center;
`

const MenuList = styled.ul`
    list-style: none;
    width: 100%;
    max-width: 40rem;
    transform: translateY(-5rem);
`

const MenuListItem = styled.li`
    position: relative;
    font-size: 2.5rem;
    text-transform: uppercase;
    padding: 1.5rem;
    font-weight: bold;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.brightGrey};
    width: 100%;
    margin: 1rem 0;
    text-align: center;
    border-radius: .5rem;
    cursor: pointer;

    :hover {
        color: ${({ theme }) => theme.green};
    }

`


const Navbar = props => {

    const {  showContact, setShowContact, showMenu, setShowMenu } = props
    const dispatch = useDispatch()
    const { text, locale } = useSelector(state => state)
    const [ useLightBg, setUseLightBg ] = useState(false)


    useEffect(() => {
        if(showMenu || showContact){
            let timeout;
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                openHandler()
            },200)
        } else {
            setUseLightBg(false)
            setShowContact(false)
            setShowMenu(false)
        }
    },[showMenu, showContact])
    
    const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView({behavior: "instant"})
    }

    const onClickHandler = (item) => {
        if(item.id){
            setShowMenu(false)
            scrollTo(item.id)
        } else {
            item.action()
        }
    }

    const toggleHandler = () => {
        if(!showMenu && !showContact){
            openHandler()
        } else {
            closeHandler()
        }
    }

    const openHandler = () => {
        setShowMenu(true)
        setUseLightBg(true)
    }

    const closeHandler = () => {
        setShowMenu(false)
        setShowContact(false)
        setUseLightBg(false)
    }

    const nextLocale = locale === "en" ? "fr" : "en"
    const sections = [
        { label: text.projects_title, id: "projects" },
        { label: text.my_skills, id: "skills" },
        { label: text.about_me, id: "about-me" },
        { label: text.contact, action: () => setShowContact(true)},
        { label: text[`${nextLocale}_locale`], action: () => dispatch(actions.setText(nextLocale))}
    ]

    return (
        <Container showMenu={showMenu}>
            <ToggleContainer onClick={toggleHandler}>
                <Toggle>
                    <ToggleBar className="top" />
                    <ToggleBar className="mid left" />
                    <ToggleBar className="mid right" />
                    <ToggleBar className="bottom" />
                </Toggle>
            </ToggleContainer>
            
            <Menu className="menu" useLightBg={useLightBg}>
                {showContact ?
                    <ContactMe 
                        closeHandler={closeHandler}
                    /> :
                    <MenuList>
                        {sections.map((section, index) => (
                            <MenuListItem key={index} onClick={() => onClickHandler(section)}>
                                {section.label}
                            </MenuListItem>
                        ))}
                    </MenuList>   
                }
                </Menu>
        </Container>
     )
};

export default Navbar;

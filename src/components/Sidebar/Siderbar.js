import React, { Component } from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import IconSvg from '../../utilities/svg/svg';
import {FormattedMessage } from 'react-intl'

class Siderbar extends Component {
    render() {
        const started = this.props.started;
        return (
            <div className={`sidebar ${started ? 'started': ''}`}>
                <div className="sidebar__header">
                    <div className="sidebar__header__imgContainer">
                        <div className="sidebar__header__imgContainer__img"></div>
                        <div className="sidebar__header__imgContainer__status"></div>
                    </div>
                    <div className="sidebar__header__name">
                        Anja Rasoloarivalona
                    </div>
                </div>
                <nav className="sidebar__nav">
                    <ul className="sidebar__nav__list">
                        <NavLink to="/" exact>
                            <div className="sidebar__nav__list__item">
                                <IconSvg icon="user"/>
                                <span><FormattedMessage id="aboutMe" defaultMessage="about me"/></span>
                            </div> 
                            <div className="sidebar__nav__list__item__design sidebar__nav__list__item__design--top">
                                <div className="sidebar__nav__list__item__design__inner"></div>
                            </div>
                            <div className="sidebar__nav__list__item__design sidebar__nav__list__item__design--bottom">
                                <div className="sidebar__nav__list__item__design__inner"></div>
                            </div>
                        </NavLink>
                        <NavLink to="projects">
                            <div className="sidebar__nav__list__item">
                                <IconSvg icon="briefcase"/>
                                <span><FormattedMessage id="projects" defaultMessage="projects"/></span>
                            </div>  
                            <div className="sidebar__nav__list__item__design sidebar__nav__list__item__design--top">
                                <div className="sidebar__nav__list__item__design__inner"></div>
                            </div>
                            <div className="sidebar__nav__list__item__design sidebar__nav__list__item__design--bottom">
                                <div className="sidebar__nav__list__item__design__inner"></div>
                            </div>
                        </NavLink>
                        <NavLink to="skills">
                            <div className="sidebar__nav__list__item">
                                <IconSvg icon="cogs"/>
                                <span><FormattedMessage id="skills" defaultMessage="skills"/></span>
                            </div>    
                            <div className="sidebar__nav__list__item__design sidebar__nav__list__item__design--top">
                                <div className="sidebar__nav__list__item__design__inner"></div>
                            </div>
                            <div className="sidebar__nav__list__item__design sidebar__nav__list__item__design--bottom">
                                <div className="sidebar__nav__list__item__design__inner"></div>
                            </div>
                        </NavLink>
                        <NavLink to="contact">
                            <div className="sidebar__nav__list__item">
                                <IconSvg icon="chat"/>
                                <span><FormattedMessage id="contact" defaultMessage="contact"/></span>
                            </div>
                            <div className="sidebar__nav__list__item__design sidebar__nav__list__item__design--top">
                                <div className="sidebar__nav__list__item__design__inner"></div>
                            </div>
                            <div className="sidebar__nav__list__item__design sidebar__nav__list__item__design--bottom">
                                <div className="sidebar__nav__list__item__design__inner"></div>
                            </div>
                        </NavLink>
                    </ul>                   
                </nav>
                <div className="sidebar__social">
                    <a className="sidebar__social__icon" href="https://www.linkedin.com/in/anja-rasoloarivalona" target="_blank" rel="noopener noreferrer">
                        <IconSvg icon="linkedin"/>
                    </a>
                    <a className="sidebar__social__icon" href="https://github.com/anja-rasoloarivalona" target="_blank" rel="noopener noreferrer">
                        <IconSvg icon="github"/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Siderbar

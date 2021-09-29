import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions'

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 1.6rem;

    ${props => {
        if(props.showList){
            return {
                "*": {
                    // color: props.theme.white,
                },
                ".bar": {
                    height: "4.5rem"
                },
                ".option": {
                    height: "3rem",
                    "& > div": {
                        opacity: 1
                    }
                }
            }
        }
    }}
`

const Bar = styled.div`
    position: absolute;
    top: 0;
    right: calc(100% + 2rem);
    width: 1px;
    height: 100%;
    background: ${props => props.theme.lightGrey};
    transition: all .3s ease-in;
`

const CurrentLocaleContainer = styled.div`
    font-size: 1.6rem;
    color: ${props => props.theme.lightGrey};
`

const CurrentLocale = styled.div`
    cursor: pointer;
`

const OptionLocaleContainer = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    height: 0%;
    width: 100%;
    overflow: hidden;
    transition: all .3s ease-in;
`

const OptionLocale = styled.div`
    position: absolute;
    top: 1rem;
    left: 0;
    width: 100%;
    height: 2rem;
    opacity: 0;
    transition: all .3s ease-in;
    cursor: pointer;
`

const LocaleSelector = () => {

    const dispatch = useDispatch()
    const { text, locale } = useSelector(s => s)

    const [ showList, setShowList ] = useState(false)


    const toggleLocale = () => {

    }


    return (
        <Container
            showList={showList}
            onMouseEnter={() => setShowList(true)}
            onMouseLeave={() => setShowList(false)}
        >
            <Bar className="bar"/>
            <CurrentLocaleContainer>
                <CurrentLocale>{text[`${locale}_locale`]}</CurrentLocale>
                <OptionLocaleContainer className="option">
                    <OptionLocale>
                        {text[`${locale === "fr" ? "en" : "fr"}_locale`]}
                    </OptionLocale>
                </OptionLocaleContainer>
            </CurrentLocaleContainer>
        </Container>
     )
};

export default LocaleSelector;

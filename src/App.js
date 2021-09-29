import React, {useState, useEffect, useRef } from "react"
import { useWindowSize, useVisible, isScrolledIntoView } from './hooks'
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import AppAnimation from './AppAnimation'
import { scroller } from "react-scroll";
import Intro from './sections/Intro/Intro'
import Content from './sections/Content/Content'
import Header from './elements/Header/Header'
import AboutMe from "./sections/AboutMe/AboutMe";
import { theme } from './theme'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from './store/actions'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

const App = () => {

    const dispatch = useDispatch()

    const [ scroll, setScroll ] = useState(0)

    const scrollHandler = direction => {
      scroller.scrollTo(`trigger-${direction}`, {
        duration: direction === "start" ? 1000 : 2000,
        delay: 0,
        smooth: "linear"
      });
    }

    const { locale, text } = useSelector(s => s)

    useEffect(() => {
      const storedLocale = localStorage.getItem("anja-locale")
      const initialLocale = storedLocale && storedLocale !== "undefined" ? storedLocale : locale 
      dispatch(actions.setText(initialLocale))
    },[])

    if(!text){
      return null
    }

    return (
      <ThemeProvider theme={theme}>
          <Header />
          <AppAnimation 
            scroll={scroll}
            setScroll={setScroll}
            scrollHandler={scrollHandler}
          />
      </ThemeProvider>
    )
}


export default App;

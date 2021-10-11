import { scroller } from "react-scroll";
import { isFirefox } from 'react-device-detect'

const scrollTo = (id, duration = 1000, delay = 0, smooth="linear") => {
    scroller.scrollTo(id, {
        duration,
        delay,
        smooth
    })
}

const toggleBodyScroll = value => {
    if(!value){
        document.body.style.overflow = 'hidden'
        document.body.style.position = 'fixed'
        document.body.style.height = '100%'
    } else {
        document.body.style.overflow = isFirefox ? 'auto' : 'overlay'
        document.body.style.position = 'initial'
        document.body.style.height = '100%'
    }
}

export {
    scrollTo,
    toggleBodyScroll
}
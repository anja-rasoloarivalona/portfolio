import { scroller } from "react-scroll";

const scrollTo = (id, duration = 1000, delay = 0) => {
    scroller.scrollTo(id, {
        duration,
        delay,
        smooth: "linear"
    })
}

export {
    scrollTo
}
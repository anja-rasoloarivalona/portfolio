import React from "react"
import { Tween } from 'react-gsap'
import { useWindowSize } from './hooks'


const ApppAnimation = () => {

    const { windowHeight } = useWindowSize()

    const trigger = {
        trigger: '.landing',
        markers: false,
        scrub: 0.1
    }

    return (
        <>
            <Tween 
                to={{ 
                    rotateX: 120,
                    scrollTrigger: { ...trigger, start: '2px', end: `${windowHeight - 10}px`}
                }}
                target={0}                
            />
            <Tween 
                to={{ 
                    y: (windowHeight * .2) * -1,
                    scale: 0.7,
                    scrollTrigger: {...trigger, start: '2px', end: `${windowHeight / 2 - 10}px`}
                }}
                target={0} 
            />
            <Tween
                from={{}} 
                to={{ 
                    y: 0,
                    scale: 1,
                    scrollTrigger: {...trigger, start: `${windowHeight / 2}px`, end: `${windowHeight - 10}px`}
                }}
                target={0} 
            />
            <Tween 
                from={{ rotateX: -100 }}
                to={{
                    rotateX: 0, 
                    scrollTrigger: {...trigger, start: '2px', end: `${windowHeight - 10}px`}
                }}
                target={1} 
            />
            <Tween 
                to={{
                    y: (windowHeight * .2) * -1,
                    scale: 0.7, 
                    scrollTrigger: {...trigger, start: '2px', end: `${windowHeight / 2 - 10}px`}
                }}
                target={1} 
            />
            <Tween 
                from={{}} 
                to={{
                    y: 0,
                    scale: 1, 
                    scrollTrigger: {...trigger, start: `${windowHeight / 2}`, end: `${windowHeight - 10}px`}
                }}
                target={1} 
            />
        </>
     )
};

export default ApppAnimation;

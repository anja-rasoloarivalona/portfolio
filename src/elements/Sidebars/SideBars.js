import React, { useEffect, useState } from "react"
import LeftBar from './LeftBar'
import RightBar from "./RightBar"
import { useWindowSize } from '../../hooks'

const SideBars = props => {
    const { scroll } = props

    const { windowHeight } = useWindowSize()

    const [ show, setShow ] = useState(false)
    const [ isAnimating, setIsAnimating ] = useState(false)

    useEffect(() => {
        if(scroll >= windowHeight){
            if(!isAnimating && !show){
                setIsAnimating(true)
            }
        } else {
            if(show){
                setShow(false)
                setIsAnimating(false)
            }
        }
    },[scroll])


    useEffect(() => {
        if(isAnimating){
            let timeout
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                setShow(true)
            },200)
        }
    },[isAnimating])

    return (
        <>
            <LeftBar show={show} />
            <RightBar show={show} />
        </>
    )
};

export default SideBars;

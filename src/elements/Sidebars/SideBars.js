import React from "react"
import LeftBar from './LeftBar'
import RightBar from "./RightBar"

const SideBars = props => {
    const { showContent } = props
    return (
        <>
            <LeftBar show={showContent} />
            <RightBar show={showContent} />
        </>
    )
};

export default SideBars;

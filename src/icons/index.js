import React from "react"
import sprite from './sprite.svg'

const Icon = props => {
    const { icon, className } = props
    return (
        <svg className={className || ""}>
            <use href={sprite + `#${icon}`}/>
        </svg>
    )
};

export default Icon;

import React from "react"
import sprite from './sprite.svg'
import styled from 'styled-components'

const Container = styled.svg`
    path {
        stroke-width: 9 !important;
    }
    &.path {
        stroke-width: 9 !important;
    }
    .path {
        stroke-dasharray: 20;
    }

`

const Icon = props => {
    const { icon, className } = props
    return (
        <Container className={className || ""}>
            <use href={sprite + `#${icon}`}/>
        </Container>
    )
};

export default Icon;

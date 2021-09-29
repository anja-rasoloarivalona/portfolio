import React from "react"
import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(2, 100vw);
    grid-template-rows: max-content;
    perspective: 1000px;
`

const SliderItem = styled.div`
    width: 100vw;
    height: 100%;
    background: red;
    ${props => {
        if(props.index === 0){
            return {
                // transform: "skewX(90deg)"
            }
        }
    }}
`

const Slider = props => {

    return (
        <Container>
            <SliderItem index={0}>
                {props.slides[0]}
            </SliderItem>
            <SliderItem index={1}>
                {props.slides[1]}
            </SliderItem>
        </Container>
     )
};

export default Slider;

import styled from 'styled-components'
import ScrollBar from './Scrollbar'

const ShadowText = styled.div`
    font-size: 3rem;
    color: white;
    text-transform: uppercase;
    font-weight: 700;
    font-family: verdana;
    text-shadow:
        1px 1px 1px #919191,
        1px 2px 1px #919191,
        1px 3px 1px #919191,
        1px 4px 1px #919191,
        1px 5px 1px #919191,
        1px 6px 1px #919191,
        1px 7px 1px #919191,
        1px 8px 1px #919191,
        1px 9px 1px #919191,
        1px 10px 1px #919191,
        1px 18px 6px rgba(16,16,16, .4),
        1px 22px 10px rgba(16,16,16, .2),
        1px 25px 35px rgba(16,16,16, .2),
        1px 30px 60px rgba(16,16,16, .4);

`

export {
    ShadowText,
    ScrollBar 
}
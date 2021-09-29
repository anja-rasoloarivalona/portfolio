import textData from './text.json'
import * as actionTypes from './actionTypes'

const setText = locale => {
    const text = {}
    Object.keys(textData).forEach(t => {
        text[t] = textData[t][locale]
    })
    return {
        type: actionTypes.SET_TEXT,
        data: {
            text,
            locale
        }
    }
}

const setCurrentSection = section => {
    return {
        type: actionTypes.SET_CURRENT_SECTION,
        section
    }
}

export {
    setText,
    setCurrentSection
}
import * as actionTypes from './actionTypes'

const updatedObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

const initialState = {
    locale: "en",
    text: null,
    currentSection: "intro"
}

const setText = (state, action) => {
    const { text, locale } = action.data
    localStorage.setItem("anja-locale", locale)
    return updatedObject(state, { text, locale })
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_TEXT: return setText(state, action)
        case actionTypes.SET_CURRENT_SECTION: return updatedObject(state, {currentSection: action.section})
        default: return state
    }
}

export default reducer
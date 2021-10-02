import * as actionTypes from './actionTypes'

const storedLocale = localStorage.getItem("anja-locale")
const initialLocale = storedLocale && storedLocale !== "undefined" ? storedLocale : "en" 

const updatedObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

const initialState = {
    locale: initialLocale,
    text: null,
}

const setText = (state, action) => {
    const { text, locale } = action.data
    localStorage.setItem("anja-locale", locale)
    return updatedObject(state, { text, locale })
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_TEXT: return setText(state, action)
        default: return state
    }
}

export default reducer
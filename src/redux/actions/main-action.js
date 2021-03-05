import { SET_NOTES, ADD_NOTE, REMOVE_NOTE, UPDATE_TIME, SET_COUNTER } from "../../constants"

export const setNotes = (notes) => ({
    type: SET_NOTES,
    notes,
})

export const addNote = (id, text, time, counter) => ({
    type: ADD_NOTE,
    payload: {id, text, time, counter}
})

export const removeNote = (id) => ({
    type: REMOVE_NOTE,
    id,
})

export const updateTime = (id, time) => {
    return {
        type: UPDATE_TIME,
        id,
        time,
    }
}

export const setCounter = (id) => {
    return {
        type: SET_COUNTER,
        id,
    }
}
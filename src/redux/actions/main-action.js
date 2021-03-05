import { SET_NOTES, ADD_NOTE, REMOVE_NOTE, UPDATE_TIME } from "../../constants";

export const setNotes = (notes) => ({
  type: SET_NOTES,
  notes,
});

export const addNote = (id, text, time) => {
  return {
    type: ADD_NOTE,
    payload: { id, text, time },
  };
};

export const removeNote = (id) => ({
  type: REMOVE_NOTE,
  id,
});

export const updateTime = (id, time) => {
  return {
    type: UPDATE_TIME,
    id,
    time,
  };
};

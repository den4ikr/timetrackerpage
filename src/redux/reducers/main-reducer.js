import { ADD_NOTE, REMOVE_NOTE, SET_NOTES, UPDATE_TIME } from "../../constants";

const initialState = {
  notes: [
    { id: 1, text: "Note 1", time: "00:00:00", counter: 0 },
    { id: 2, text: "Note 2", time: "00:00:00", counter: 0 },
  ],
};

export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTES:
      return { ...state, notes: action.notes };
    case ADD_NOTE: {
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };
    }
    case REMOVE_NOTE:
      return {
        ...state,
        notes: [...state.notes.filter((note) => note.id !== action.id)],
      };
    case UPDATE_TIME:
      return Object.assign({}, state, {
        notes: state.notes.map((note) => {
          if (note.id !== action.id) {
            return note;
          }

          return Object.assign({}, note, {
            time: action.time,
          });
        }),
      });
    default:
      return state;
  }
};

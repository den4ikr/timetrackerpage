import { combineReducers, createStore } from "redux";
import { MainReducer } from "./reducers/main-reducer";

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.log(err);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

const rootReducer = combineReducers({
  main: MainReducer,
});

const persistedState = loadFromLocalStorage();
export const store = createStore(rootReducer, persistedState);

store.subscribe(() => saveToLocalStorage(store.getState()));

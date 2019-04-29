import { createStore, combineReducers } from "redux";
import modifierReducer from "./reducers/Modifier";

const reducer = combineReducers({
  modifier: modifierReducer
});

export const store = createStore(reducer);

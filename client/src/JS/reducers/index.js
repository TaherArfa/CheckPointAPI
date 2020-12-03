import { combineReducers } from "redux";
import { personReducer } from "./persons";
import { editReducer } from "./edit";

export const rootReducers = combineReducers({ personReducer, editReducer });

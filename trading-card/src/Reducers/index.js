import cardManagerReducer from "./cardManager";
import {combineReducers} from "redux";


const allReducers = combineReducers({
    manager: cardManagerReducer
});

export default allReducers;
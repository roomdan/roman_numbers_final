import numbers_reducer from "./reducer";
import { createStore, combineReducers } from "redux";


const reducers = combineReducers({
    numbers_reducer
})

const store = createStore(reducers);

export default store;
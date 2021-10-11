import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//API
import logger from "redux-logger";

//state
import { filmsReducer } from "./filmsReducer";

const rootReducer = combineReducers({
    films: filmsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk,logger));
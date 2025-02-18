import { combineReducers } from 'redux';
import filtersReducer from "./filtersReducer"; 
import moviesReducer from "./moviesReducer"; 

const rootReducer = combineReducers({
    filters: filtersReducer,
    movies: moviesReducer
});

export default rootReducer;
import { combineReducers, createStore, applyMiddleware } from "redux";
import { searchReducer } from "./search-reducer";
import { resultsReducer } from "./results-reducer";
import thunkMiddleware from "redux-thunk";

const reducer = combineReducers({
  search: searchReducer,
  results: resultsReducer,
});

type ReducerType = typeof reducer;
export type StateType = ReturnType<ReducerType>;

export default createStore(reducer, applyMiddleware(thunkMiddleware));

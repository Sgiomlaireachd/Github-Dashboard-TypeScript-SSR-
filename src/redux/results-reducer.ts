import { SET_SEARCH_RESULTS } from "./actionTypes";
import { githubAPI } from "../api/api";
import { ResultType } from "../types/types";

const initialState = {
  searchResults: [] as ResultType[],
};

type InitialStateType = typeof initialState;

export const resultsReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};

// Actions
type SetSearchResultsActionType = {
  type: typeof SET_SEARCH_RESULTS;
  payload: ResultType[];
};

export const setSearchResults = (
  results: ResultType[]
): SetSearchResultsActionType => ({
  type: SET_SEARCH_RESULTS,
  payload: results,
});

// Thunks
export const searchRepositories = (query: string) => async (
  dispatch: Function
) => {
  const result = await githubAPI.searchRepositories(query);
  dispatch(setSearchResults(result));
};

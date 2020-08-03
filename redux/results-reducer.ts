import { SET_SEARCH_RESULTS, SET_IS_LOADING } from "./actionTypes";
import { githubAPI } from "../api/api";
import { ResultType } from "../types/types";

const initialState = {
  searchResults: [] as ResultType[],
  isLoading: false,
};

type InitialStateType = typeof initialState;

export const resultsReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

type ActionsTypes = SetSearchResultsActionType | SetIsLoadingActionType;

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

type SetIsLoadingActionType = {
  type: typeof SET_IS_LOADING;
  payload: boolean;
};
export const setIsLoading = (status: boolean) => ({
  type: SET_IS_LOADING,
  payload: status,
});

// Thunks
export const searchRepositories = (query: string) => async (
  dispatch: Function
) => {
  dispatch(setIsLoading(true));
  const result = await githubAPI.searchRepositories(query);
  dispatch(setSearchResults(result));
  dispatch(setIsLoading(false));
};

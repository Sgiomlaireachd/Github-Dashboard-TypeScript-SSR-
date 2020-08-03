import { SET_NEW_SEARCH_QUERY } from "./actionTypes";

const initialState = {
  searchQuery: "",
};

type initialStateType = typeof initialState;

export const searchReducer = (
  state = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case SET_NEW_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

// Actions
type SetNewSearchQueryActionType = {
  type: typeof SET_NEW_SEARCH_QUERY;
  payload: string;
};
export const setNewSearchQuery = (
  newSearchQuery: string
): SetNewSearchQueryActionType => ({
  type: SET_NEW_SEARCH_QUERY,
  payload: newSearchQuery,
});

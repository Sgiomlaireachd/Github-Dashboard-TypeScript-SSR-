import React, { useEffect } from "react";
import { StateType } from "../../redux/store";
import SearchResults from "./SearchResults";
import { searchRepositories } from "../../redux/results-reducer";
import { connect } from "react-redux";
import { ResultType } from "../../types/types";

type MapStateProps = {
  results: ResultType[];
  searchQuery: string;
};

type MapDispatchProps = {
  searchRepositories: (query: string) => void;
};

type OwnProps = {};

type SearchResultsContainerProps = MapStateProps & MapDispatchProps;

const SearchResultsContainer: React.FC<SearchResultsContainerProps> = ({
  results,
  searchQuery,
  searchRepositories,
}) => {
  useEffect(() => {
    searchRepositories(searchQuery || "minecraft");
  }, [searchQuery]);

  return <SearchResults results={results} />;
};

const mapStateToProps = (state: StateType): MapStateProps => ({
  results: state.results.searchResults,
  searchQuery: state.search.searchQuery,
});

export default connect<MapStateProps, MapDispatchProps, OwnProps, StateType>(
  mapStateToProps,
  { searchRepositories }
)(SearchResultsContainer);

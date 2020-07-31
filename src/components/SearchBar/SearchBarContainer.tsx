import React from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import { StateType } from "../../redux/store";
import { setNewSearchQuery } from "../../redux/search-reducer";

type MapStateSearchBarContainerProps = {
  searchQuery: string;
};

type MapDispatchSearchBarContainerProps = {
  setNewSearchQuery: (newSearchQuery: string) => void;
};

type OwnSearchBarContainerProps = {};

type SearchBarContainerProps = MapStateSearchBarContainerProps &
  MapDispatchSearchBarContainerProps &
  OwnSearchBarContainerProps;

const SearchBarContainer: React.FC<SearchBarContainerProps> = (props) => {
  const onSubmit = (newSearchQuery: string) => {
    props.setNewSearchQuery(newSearchQuery);
  };

  return <SearchBar searchQuery={props.searchQuery} onSubmit={onSubmit} />;
};

const mapStateToProps = (
  state: StateType
): MapStateSearchBarContainerProps => ({
  searchQuery: state.search.searchQuery,
});

export default connect<
  MapStateSearchBarContainerProps,
  MapDispatchSearchBarContainerProps,
  OwnSearchBarContainerProps,
  StateType
>(mapStateToProps, { setNewSearchQuery })(SearchBarContainer);

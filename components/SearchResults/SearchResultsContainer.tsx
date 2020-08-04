import React, { useEffect } from "react";
import { StateType } from "../../redux/store";
import SearchResults from "./SearchResults";
import { searchRepositories } from "../../redux/results-reducer";
import { connect } from "react-redux";
import { ResultType } from "../../types/types";
import { Typography, Spin } from "antd";
import { NextPageContext, GetStaticProps } from "next";

const { Text } = Typography;

type MapStateProps = {
  results: ResultType[];
  searchQuery: string;
  isLoading: boolean;
};

type MapDispatchProps = {
  searchRepositories: (query: string) => void;
};

type OwnProps = {};

type SearchResultsContainerProps = MapStateProps & MapDispatchProps;

const SearchResultsContainer: React.FC<SearchResultsContainerProps> = ({
  results,
  searchQuery,
  isLoading,
  searchRepositories,
}) => {
  useEffect(() => {
    if (searchQuery) searchRepositories(searchQuery);
  }, [searchQuery]);

  if (!results.length)
    return (
      <div
        className="container"
        style={{ textAlign: "center", paddingTop: "50px" }}
      >
        {isLoading ? <Spin size="large" /> : <Text>No repositories.</Text>}
      </div>
    );

  return <SearchResults results={results} isLoading={isLoading} />;
};

const mapStateToProps = (state: StateType): MapStateProps => ({
  results: state.results.searchResults,
  searchQuery: state.search.searchQuery,
  isLoading: state.results.isLoading,
});

export default connect<MapStateProps, MapDispatchProps, OwnProps, StateType>(
  mapStateToProps,
  { searchRepositories }
)(SearchResultsContainer);

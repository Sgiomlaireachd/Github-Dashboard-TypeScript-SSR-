import React from "react";
import { ResultType } from "../../types/types";

type SearchResultsProps = {
  results: ResultType[];
};

const SearchResults: React.FC<SearchResultsProps> = (props) => {
  const resultItems = props.results.map((item) => (
    <div className="result__item" key={item.id}>
      {item.name}
    </div>
  ));
  return (
    <div className="results">
      <div className="results__inner">{resultItems}</div>
    </div>
  );
};

export default SearchResults;

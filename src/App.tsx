import React from "react";
import "./App.css";
import SearchBarContainer from "./components/SearchBar/SearchBarContainer";
import SearchResultsContainer from "./components/SearchResults/SearchResultsContainer";

function App() {
  return (
    <>
      <SearchBarContainer />
      <SearchResultsContainer />
    </>
  );
}

export default App;

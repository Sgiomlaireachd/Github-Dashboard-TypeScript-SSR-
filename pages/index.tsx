import Head from "next/head";
import MainLayout from "../layouts/main";
import SearchResultsContainer from "../components/SearchResults/SearchResultsContainer";

export default function Home() {
  return (
    <MainLayout>
      <SearchResultsContainer />
    </MainLayout>
  );
}

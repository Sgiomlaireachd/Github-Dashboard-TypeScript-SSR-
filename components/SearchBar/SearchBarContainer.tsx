import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import { StateType } from "../../redux/store";
import { setNewSearchQuery } from "../../redux/search-reducer";
import { compose } from "redux";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const onSubmit = (newSearchQuery: string) => {
    props.setNewSearchQuery(newSearchQuery);
    if (router.pathname !== "/") router.push("/");
  };

  return <SearchBar searchQuery={props.searchQuery} onSubmit={onSubmit} />;
};

const mapStateToProps = (
  state: StateType
): MapStateSearchBarContainerProps => ({
  searchQuery: state.search.searchQuery,
});

export default compose(connect(mapStateToProps, { setNewSearchQuery }))(
  SearchBarContainer
);

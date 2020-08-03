import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import SearchBarContainer from "../components/SearchBar/SearchBarContainer";
import store from "../redux/store";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();

const MainLayout = (props) => {
  return (
    <>
      <Provider store={store}>
        <SearchBarContainer />
        {props.children}
      </Provider>
    </>
  );
};
export default MainLayout;

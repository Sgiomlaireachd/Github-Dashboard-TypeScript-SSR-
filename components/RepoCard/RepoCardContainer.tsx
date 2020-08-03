import React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { compose } from "redux";

type PathParamsType = {
  repoId: string | undefined;
};
type RepoCardContainerProps = RouteComponentProps<PathParamsType> & {};

const RepoCardContainer: React.FC<RepoCardContainerProps> = (props) => {
  return <h1>Test</h1>;
};
export default compose(withRouter)(RepoCardContainer);

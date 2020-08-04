import MainLayout from "../../../layouts/main";
import RepoCardContainer from "../../../components/RepoCard/RepoCardContainer";
import { ResultType } from "../../../types/types";
import { githubAPI } from "../../../api/api";

const RepoPage = (props) => {
  return (
    <MainLayout>
      <RepoCardContainer repo={props.repo} />
    </MainLayout>
  );
};

export async function getServerSideProps(context) {
  console.log("REPO_CARD:", context);
  const { repoAuthor, repoName } = context.query;
  const res: ResultType = await githubAPI.getRepoInfo(repoAuthor, repoName);
  console.log("RES:", res);
  return {
    props: {
      repo: res,
    }, // will be passed to the page component as props
  };
}

export default RepoPage;

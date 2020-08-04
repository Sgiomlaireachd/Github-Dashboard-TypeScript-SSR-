import MainLayout from "../../../layouts/main";
import RepoCard from "../../../components/RepoCard/RepoCard";
import { ResultType } from "../../../types/types";
import { githubAPI } from "../../../api/api";
import { NextPageContext, NextPage } from "next";

type RepoPageProps = {
  repo: ResultType;
};

const RepoPage: NextPage<RepoPageProps> = ({ repo }) => {
  return (
    <MainLayout>
      <RepoCard repo={repo} />
    </MainLayout>
  );
};

type RepoContext = NextPageContext & {
  query: {
    repoAuthor: string;
    repoName: string;
  };
};

export async function getServerSideProps(context: RepoContext) {
  const { repoAuthor, repoName } = context.query;
  const res: ResultType = await githubAPI.getRepoInfo(repoAuthor, repoName);

  return {
    props: {
      repo: res,
    }, // will be passed to the page component as props
  };
}

export default RepoPage;

import { useRouter } from "next/router";
import MainLayout from "../../layouts/main";

const RepoPage = (props) => {
  const router = useRouter();
  return (
    <MainLayout>
      <div className="container">
        <h1>Repo {router.query.repoId}</h1>
      </div>
    </MainLayout>
  );
};

export default RepoPage;

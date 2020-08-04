import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Card, Avatar } from "antd";
import { githubAPI } from "../../api/api";
import { ResultType } from "../../types/types";

const RepoCardContainer = (props) => {
  const repo = props.repo;
  const router = useRouter();
  console.log("PROPS REPO:", repo);
  // const [repo, setRepo] = useState<ResultType>(null);

  // useEffect(() => {
  //   const apiCall = async () => {
  //     const { repoAuthor, repoName } = router.query;
  //     const res: ResultType = await githubAPI.getRepoInfo(repoAuthor, repoName);
  //     console.log(res);
  //     setRepo(res);
  //   };
  //   apiCall();
  // }, []);

  if (!repo) {
    return <Card bordered loading={true}></Card>;
  }

  return (
    <div className="repo container">
      <Card bordered>
        <Card.Meta
          title="Repository Name"
          description={repo.name}
          style={{ marginBottom: "15px" }}
        />
        <Card.Meta
          title="Created"
          description={repo.pushed_at.split("T")[0]}
          style={{ marginBottom: "15px" }}
        />
        <Card.Meta
          title="Last Updated"
          description={repo.updated_at.split("T")[0]}
          style={{ marginBottom: "15px" }}
        />
        <Card.Meta
          title="Stars"
          description={repo.stargazers_count}
          style={{ marginBottom: "15px" }}
        />
        <Card.Meta
          title="URL"
          description={<a href={repo.html_url}>{repo.html_url}</a>}
          style={{ marginBottom: "35px" }}
        />
        <Card bordered>
          <Card.Meta
            title="Created by"
            description={repo.owner.login}
            style={{ marginBottom: "15px" }}
          />
          <Card.Meta
            title="Author URL"
            description={
              <a href={repo.owner.html_url}>{repo.owner.html_url}</a>
            }
            style={{ marginBottom: "15px" }}
            avatar={<Avatar src={repo.owner.avatar_url} />}
          />
        </Card>
      </Card>
    </div>
  );
};

export default RepoCardContainer;

import React from "react";
import { Card, Avatar } from "antd";
import { ResultType } from "../../types/types";

type RepoProps = {
  repo: ResultType;
};

const RepoCard: React.FC<RepoProps> = ({ repo }) => {
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

export default RepoCard;

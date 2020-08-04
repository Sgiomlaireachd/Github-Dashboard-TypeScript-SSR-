import React from "react";
import { ResultType } from "../../types/types";
import { Card, Typography, Button } from "antd";
import Link from "next/link";

type SearchResultsProps = {
  results: ResultType[];
  isLoading: boolean;
};

const SearchResults: React.FC<SearchResultsProps> = (props) => {
  const resultItems = props.results.map((item) => (
    <Card
      loading={props.isLoading}
      className="result__item"
      key={item.id}
      bordered={true}
      style={{ marginTop: "15px" }}
    >
      <Card.Meta title={item.name} style={{ marginBottom: "10px" }} />
      <Card.Meta
        title="⭐ Stars:"
        description={item.stargazers_count || "0"}
        style={{ marginBottom: "15px" }}
      />
      <Card.Meta
        title="📅 Last Updated:"
        description={item.updated_at}
        style={{ marginBottom: "15px" }}
      />
      <Card.Meta
        title="🔗 URL:"
        description={
          <Typography.Link href={item.html_url} target="_blank">
            {item.html_url}
          </Typography.Link>
        }
      />
      <Link
        href="/repo/[repoAuthor]/[repoName]"
        as={`/repo/${item.owner.login}/${item.name}`}
      >
        <Button style={{ marginTop: "20px", padding: "5px 20px" }}>Info</Button>
      </Link>
    </Card>
  ));
  return (
    <div className="results" style={{ paddingBottom: "50px" }}>
      <div className="results__inner container">{resultItems}</div>
    </div>
  );
};

export default SearchResults;

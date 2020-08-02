import React from "react";
import { ResultType } from "../../types/types";
import { Card, Typography, Skeleton } from "antd";

const { Text, Link } = Typography;

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
        description={item.stargazers_count}
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
          <Link href={item.html_url} target="_blank">
            {item.html_url}
          </Link>
        }
      />
    </Card>
  ));
  return (
    <div className="results" style={{ paddingBottom: "50px" }}>
      <div className="results__inner container">{resultItems}</div>
    </div>
  );
};

export default SearchResults;

export type ResultType = {
  id: number;
  stargazers_count: number;
  name: string;
  url: string;
  html_url: string;
  updated_at: string;
  pushed_at: string;
  owner: {
    id: number;
    login: string;
    html_url: string;
    avatar_url: string;
  };
};

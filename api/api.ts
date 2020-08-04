import axios from "axios";
import { ResultType } from "../types/types";

const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
});

type searchRepositoriesType = {
  items: ResultType[];
};

export const githubAPI = {
  searchRepositories: async (query: string) => {
    const response = await axiosInstance.get<searchRepositoriesType>(
      `/search/repositories?q=${query}`
    );
    return response.data.items;
  },
  getRepoInfo: async (repoAuthor: string, repoName: string) => {
    const response = await axiosInstance.get<ResultType>(
      `/repos/${repoAuthor}/${repoName}`
    );
    return response.data;
  },
};

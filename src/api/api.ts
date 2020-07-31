import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
});

export const githubAPI = {
  searchRepositories: async (query: string) => {
    const response = await axiosInstance.get(`/search/repositories?q=${query}`);
    return response.data.items;
  },
};

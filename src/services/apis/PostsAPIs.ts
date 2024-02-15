import { FetchCountRequest } from "../../shared/types/PostsType";
import buildAxiosClient from "../clients/Axios";

const client = buildAxiosClient();

export const FetchLatestBlogs = async ({ page = 1 }) => {
  const { data } = await client.post("/latest-blogs", { page });
  return data;
};

export const FetchTrendingBlogs = async () => {
  const { data } = await client.get("/trending-blogs");

  return data;
};

export const FetchCount = async ({
  countRoute,
  data_to_send,
}: FetchCountRequest) => {
  const { data } = await client.post(countRoute, data_to_send);

  return data;
};

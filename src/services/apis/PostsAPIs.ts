import { FetchCountRequest } from "../../shared/types/PostsType";
import buildAxiosClient from "../clients/Axios";

const client = buildAxiosClient();

export const FetchLatestBlogs = async ({ page = 1 }) => {
  const resp = await client.post("/latest-blogs", { page });
  return resp.data;
};

export const FetchTrendingBlogs = async () => {
  const resp = await client.get("/trending-blogs");

  return resp.data;
};

export const FetchCount = async ({
  countRoute,
  data_to_send,
}: FetchCountRequest) => {
  const resp = await client.post(countRoute, data_to_send);

  return resp.data;
};

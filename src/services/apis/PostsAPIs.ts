import {
  FetchBlogsByCategoryReq,
  FetchCountRequest,
} from "../../shared/types/PostsType";
import buildAxiosClient from "../clients/Axios";

const client = buildAxiosClient();

export const FetchLatestBlogs = ({ page = 1 }) => {
  return client.post("/latest-blogs", { page });
};

export const FetchTrendingBlogs = () => {
  return client.get("/trending-blogs");
};

export const FetchCount = ({ countRoute, data_to_send }: FetchCountRequest) => {
  return client.post(countRoute, data_to_send);
};

export const FetchBlogsByCategory = ({
  page,
  tag,
}: FetchBlogsByCategoryReq) => {
  return client.post("/search-blogs", { tag, page });
};

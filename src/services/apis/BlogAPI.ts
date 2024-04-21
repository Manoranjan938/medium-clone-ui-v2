import { FetchBlogDetailsReqState } from "../../shared/types/BlogsType";
import buildAxiosClient from "../clients/Axios";

const client = buildAxiosClient();

export const FetchBlogDetails = ({
  blog_id,
  draft,
  mode,
}: FetchBlogDetailsReqState) => {
  return client.post("/get-blog", { blog_id, draft, mode });
};

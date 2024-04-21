import { AuthorType } from "./PostsType";

export interface NewBlogState {
  title: string;
  banner: string;
  content: [];
  tags: string[];
  desc: string;
  author: AuthorType;
}

export interface FetchBlogDetailsReqState {
  blog_id: string;
  draft: boolean;
  mode: string;
}

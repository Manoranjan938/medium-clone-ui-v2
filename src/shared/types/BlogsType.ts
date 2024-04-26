/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthorType } from "./PostsType";

export interface NewBlogState {
  title: string;
  banner: string;
  content: any[];
  tags: string[];
  desc: string;
  author: AuthorType;
}

export interface FetchBlogDetailsReqState {
  blog_id: string;
  draft: boolean;
  mode: string;
}

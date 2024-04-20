import { AuthorType } from "./PostsType";

export interface NewBlogState {
  title: string;
  banner: string;
  content: [];
  tags: string[];
  desc: string;
  author: AuthorType;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { NewBlogState } from "../../shared/types/BlogsType";

export interface BlogsModel {
  newBlog: NewBlogDetails;
}

export interface NewBlogDetails {
  blog: NewBlogState;
  editorState: any;
  textEditor: TextEditorState;
}

interface TextEditorState {
  isReady: boolean;
  editor: any;
}

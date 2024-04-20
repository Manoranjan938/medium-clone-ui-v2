import { NewBlogState } from "../../shared/types/BlogsType";

export interface BlogsModel {
  newBlog: NewBlogDetails;
}

export interface NewBlogDetails {
  blog: NewBlogState;
  editorState: boolean;
  textEditor: TextEditorState;
}

interface TextEditorState {
  isReady: boolean;
}

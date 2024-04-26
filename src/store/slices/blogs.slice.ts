import { createSlice } from "@reduxjs/toolkit";
import { BlogsModel } from "../models/Blogs.model";

const initialState: BlogsModel = {
  newBlog: {
    blog: {
      author: {
        personal_info: { fullname: "", profile_img: "", username: "" },
      },
      banner: "",
      content: [],
      desc: "",
      tags: [],
      title: "",
    },
    editorState: "editor",
    textEditor: { isReady: false, editor: {} },
  },
};

const blogReducer = createSlice({
  name: "blog-details",
  initialState,
  reducers: {
    updateEditor(state, action) {
      return {
        ...state,
        newBlog: {
          ...state.newBlog,
          textEditor: { ...state.newBlog.textEditor, editor: action.payload },
        },
      };
    },
  },
});

export const { updateEditor } = blogReducer.actions;

export default blogReducer.reducer;

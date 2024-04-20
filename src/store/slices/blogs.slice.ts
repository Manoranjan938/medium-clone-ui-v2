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
    editorState: false,
    textEditor: { isReady: false },
  },
};

const blogReducer = createSlice({
  name: "blog-details",
  initialState,
  reducers: {},
});

export default blogReducer.reducer;

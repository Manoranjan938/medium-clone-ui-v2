/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Navigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import BlogEditor from "./components/BlogEditor";
import PublishForm from "./components/PublishForm";

const EditorsPage = () => {
  const { access_token } = useSelector(
    (state: RootState) => state.auth.userDetails,
  );
  const { editorState } = useSelector((state: RootState) => state.blog.newBlog);
  const [loading, setLoading] = useState(false);
  const { blog_id } = useParams();

  useEffect(() => {
    if (!blog_id) {
      setLoading(false);
    }
  }, []);

  return (
    <Fragment>
      {access_token === "" ? (
        <Navigate to="/signin" />
      ) : loading ? (
        <Loader />
      ) : editorState ? (
        <BlogEditor />
      ) : (
        <PublishForm />
      )}
    </Fragment>
  );
};

export default EditorsPage;

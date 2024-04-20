import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Navigate } from "react-router-dom";
import Loader from "../../components/Loader";
import BlogEditor from "./components/BlogEditor";
import PublishForm from "./components/PublishForm";

const EditorsPage = () => {
  const { access_token } = useSelector(
    (state: RootState) => state.auth.userDetails,
  );
  const [loading] = useState(false);
  const [editorState] = useState("editor");
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

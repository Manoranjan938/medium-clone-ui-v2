import { Link } from "react-router-dom";

import logo from "../../../../assets/imgs/logo.png";
import { Toaster } from "react-hot-toast";
import AnimationWrapper from "../../../../shared/PageAnimation";

const BlogEditor = () => {
  const title: string = "";
  const handlePublishEvent = () => {};
  const handleDraftEvent = () => {};
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="flex-none w-10">
          <img src={logo} alt="home-logo" />
        </Link>
        <p className="max-md:hidden text-black line-clamp-1 w-full">
          {title.length ? title : "New Blog"}
        </p>

        <div className="flex gap-4 ml-auto">
          <button className="btn-dark py-2" onClick={handlePublishEvent}>
            Publish
          </button>
          <button className="btn-light py-2" onClick={handleDraftEvent}>
            Save Draft
          </button>
        </div>
      </nav>

      <Toaster />
      <AnimationWrapper>
        <section></section>
      </AnimationWrapper>
    </>
  );
};

export default BlogEditor;

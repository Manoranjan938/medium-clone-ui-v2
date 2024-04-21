/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";

import logo from "../../../../assets/imgs/logo.png";
import defaultBanner from "../../../../assets/imgs/blog banner.png";

import { Toaster } from "react-hot-toast";
import AnimationWrapper from "../../../../shared/PageAnimation";
import { KeyboardEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

const BlogEditor = () => {
  //Selecting blog data from redux state
  const {
    blog: { banner, title },
  } = useSelector((state: RootState) => state.blog.newBlog);

  //Selecting auth data from redux state
  const { access_token } = useSelector(
    (state: RootState) => state.auth.userDetails,
  );

  console.log(access_token, "access token");

  const handlePublishEvent = () => {};

  const handleDraftEvent = () => {};

  const handleError = (e: any) => {
    const img = e.target as HTMLImageElement;
    if (img) {
      img.src = defaultBanner;
    }
  };

  const handleTitleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === "Enter") {
      e.preventDefault();
    }
  };

  const handleTitleChange = (e: any) => {
    const input = e.target;
    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";
  };

  const handleBannerUpload = () => {};

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
        <section>
          <div className="mx-auto max-w-[900px] w-full">
            <div className="relative aspect-video bg-white border-4 border-grey hover:opacity-80">
              <label htmlFor="uploadBanner">
                <img
                  src={banner || defaultBanner}
                  alt=""
                  className="z-20"
                  onError={handleError}
                />
                <input
                  type="file"
                  id="uploadBanner"
                  accept=".png, .jpeg, .jpg"
                  hidden
                  onChange={handleBannerUpload}
                />
              </label>
            </div>

            <textarea
              defaultValue={title}
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Blog Title"
              className="text-4xl font-medium w-full h-20 outline-none resize-none mt-10 leading-tight placeholder:opacity-40"
              onKeyDown={handleTitleKeyDown}
              onChange={handleTitleChange}
            ></textarea>

            <hr className="w-full opacity-20 my-5" />

            <div id="textEditorId" className="font-gelasio"></div>
          </div>
        </section>
      </AnimationWrapper>
    </>
  );
};

export default BlogEditor;

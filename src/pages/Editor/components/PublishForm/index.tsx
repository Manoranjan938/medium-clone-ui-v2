import { useSelector } from "react-redux";
import AnimationWrapper from "../../../../shared/PageAnimation";
import { Toaster } from "react-hot-toast";
import { RootState } from "../../../../store/store";
import Tags from "../../../../components/Tags";

const PublishForm = () => {
  const characterLimit = 200;
  const tagLimit = 10;
  const {
    newBlog: {
      blog: { banner, desc, tags, title },
    },
  } = useSelector((state: RootState) => state.blog);
  // const {userDetails: {access_token}} = useSelector((state: RootState) => state.auth)

  const handleCloseEvent = () => {};

  const handleBlogTitleChange = () => {};

  const handleBlogDescChange = () => {};

  const handleDescKeyDown = () => {};

  const handleKeyDownFunc = () => {};

  const handlePublishBlog = () => {};

  return (
    <AnimationWrapper>
      <section className="w-screen min-h-screen grid items-center lg:grid-cols-2 py-16 lg:gap-4">
        <Toaster />
        <button
          className="w-12 h-12 absolute right-[5vw] z-10 top-[5%] lg:top-[10%]"
          onClick={handleCloseEvent}
        >
          <i className="fi fi-br-cross"></i>
        </button>

        <div className="max-w-[550px] center">
          <p className="text-dark-gray mb-1">Preview</p>
          <div className="w-full aspect-video rounded-lg overflow-hidden bg-grey mt-4">
            <img src={banner} alt="" />
          </div>
          <h1 className="text-4xl font-medium mt-2 leading-tight line-clamp-2">
            {title}
          </h1>
          <p className="font-gelasio line-clamp-2 text-xl leading-7 mt-4">
            {desc}
          </p>
        </div>

        <div className="border-gray lg:border-1">
          <p className="text-dark-grey mb-2 mt-9">Blog Title</p>
          <input
            type="text"
            placeholder="Blog Title"
            defaultValue={title}
            className="input-box pl-4"
            onChange={handleBlogTitleChange}
          />

          <p className="text-dark-grey mb-2 mt-9">
            Short description about your blog
          </p>
          <textarea
            maxLength={characterLimit}
            defaultValue={desc}
            className="h-40 resize-none leading-7 input-box pl-4"
            onChange={handleBlogDescChange}
            onKeyDown={handleDescKeyDown}
          ></textarea>
          <p className="mt-1 text-dark-grey text-sm text-right">
            {characterLimit - desc.length} characters left
          </p>

          <p className="text-dark-grey mb-2 mt-9">
            Topics - (Helps in searching and ranking your post)
          </p>

          <div className="relative input-box pl-2 py-2 pb-4">
            <input
              type="text"
              placeholder="Topics"
              className="sticky input-box bg-white top-0 left-0 pl-4 mb-3 focus:bg-white"
              onKeyDown={handleKeyDownFunc}
            />
            {tags.map((tag, idx) => {
              return <Tags tag={tag} tagIndex={idx} key={idx} />;
            })}
          </div>
          <p className="mt-1 mb-4 text-dark-grey text-right">
            {tagLimit - tags.length} Tags left
          </p>

          <button className="btn-dark px-8" onClick={handlePublishBlog}>
            Publish
          </button>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default PublishForm;

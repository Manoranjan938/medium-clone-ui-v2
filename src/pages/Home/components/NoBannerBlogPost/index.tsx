import { Link } from "react-router-dom";
import { NoBannerBlogPostPropType } from "../../../../shared/types/PostsType";
import { getDate } from "../../../../services/custom/date";

const NoBannerBlogPost = ({ blog, idx }: NoBannerBlogPostPropType) => {
  const {
    title,
    blog_id: id,
    author: {
      personal_info: { fullname, username, profile_img },
    },
    publishedAt,
  } = blog;
  return (
    <Link to={`/blog/${id}`} className="flex gap-5 mb-4">
      <h1 className="blog-index">{idx < 10 ? "0" + (idx + 1) : idx}</h1>
      <div>
        <div className="flex gap-2 items-center mb-7">
          <img src={profile_img} alt="" className="w-6 h-6 rounded-full" />
          <p className="line-clamp-1">
            {fullname} @{username}
          </p>
          <p className="min-w-fit">{getDate(publishedAt)}</p>
        </div>
        <h1 className="blog-title">{title}</h1>
      </div>
    </Link>
  );
};

export default NoBannerBlogPost;

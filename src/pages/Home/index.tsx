/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import AnimationWrapper from "../../shared/PageAnimation";
import Loader from "../../components/Loader";
import NoDataMesasge from "../../components/NoData";
import InPageNavigation from "../../components/InPageNavigation";
import {
  FetchLatestBlogs,
  FetchTrendingBlogs,
} from "../../services/apis/PostsAPIs";
import {
  LocalBlogStateType,
  LatestBlogApiResp,
  TrendingBlogApiResp,
  TrendingBlogsResponse,
} from "../../shared/types/PostsType";
import { filterPaginationData } from "../../services/custom/filterPaginationData";
import BlogPostCard from "./components/BlogPostCard";
import LoadMoreDataBtn from "./components/LoadMoreDataBtn";
import NoBannerBlogPost from "./components/NoBannerBlogPost";

const HomePage = () => {
  const [blogs, setBlogs] = useState<LocalBlogStateType>({
    page: 0,
    results: [],
    totalDocs: 0,
  });
  const [trendingBLogs, setTrendingBlogs] = useState<TrendingBlogsResponse[]>(
    [],
  );
  const [pageState] = useState("home");
  const categories: string[] = [
    "programming",
    "food",
    "social media",
    "cooking",
    "tech",
    "finance",
    "picture",
    "travel",
  ];

  const fetchLatestBlogs = async (page = 1) => {
    const { blogs: latestBlogs }: LatestBlogApiResp = await FetchLatestBlogs({
      page,
    });
    if (latestBlogs) {
      const formattedData: LocalBlogStateType = await filterPaginationData({
        state: blogs!,
        data: latestBlogs,
        page: 1,
        countRoute: "/all-latest-blogs-count",
      });
      if (Object.keys(formattedData).length > 0) {
        setBlogs(formattedData);
      }
    }
  };

  const fetchTrendingBlogs = async () => {
    const { blogs: trendingBlogs }: TrendingBlogApiResp =
      await FetchTrendingBlogs();
    if (trendingBlogs.length > 0) {
      setTrendingBlogs(trendingBlogs);
    }
  };

  useEffect(() => {
    fetchLatestBlogs();
    fetchTrendingBlogs();
  }, []);

  return (
    <AnimationWrapper>
      <section className="h-cover flex justify-center gap-10">
        <div className="w-full">
          <InPageNavigation
            routes={[pageState, "trending blogs"]}
            defaultHidden={["trending blogs"]}
          >
            <>
              {blogs === null ? (
                <Loader />
              ) : blogs.results.length ? (
                blogs.results.map((blog, idx) => {
                  return (
                    <AnimationWrapper
                      key={idx}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                    >
                      <BlogPostCard
                        content={blog}
                        author={blog.author.personal_info}
                      />
                    </AnimationWrapper>
                  );
                })
              ) : (
                <NoDataMesasge message="No blogs published" />
              )}
              <LoadMoreDataBtn
                state={blogs}
                fetchDataFun={pageState === "home"}
              />
            </>
          </InPageNavigation>
        </div>
        <div className="min-w-[40%] lg:min-w-[400px] max-w-min border-l border-grey pl-8 pt-3 max-md:hidden">
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="font-medium text-xl mb-8">
                Stories from all interest
              </h1>
              <div className="flex gap-3 flex-wrap">
                {categories.map((category, i) => {
                  return (
                    <button
                      className={
                        "tag " +
                        (pageState === category ? "bg-black text-white" : "")
                      }
                      key={i}
                      // onClick={lodBlogByCategory}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <h1 className="font-medium text-xl mb-8">
                Trending <i className="fi fi-rr-arrow-trend-up"></i>
              </h1>
              {trendingBLogs === null ? (
                <Loader />
              ) : trendingBLogs.length ? (
                trendingBLogs.map((blog, idx) => {
                  return (
                    <AnimationWrapper
                      key={idx}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                    >
                      <NoBannerBlogPost blog={blog} idx={idx} />
                    </AnimationWrapper>
                  );
                })
              ) : (
                <NoDataMesasge message="No trending blogs." />
              )}
            </div>
          </div>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default HomePage;

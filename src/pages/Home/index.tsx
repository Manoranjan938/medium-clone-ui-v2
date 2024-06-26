/* eslint-disable react-hooks/exhaustive-deps */
import { MouseEvent, useEffect, useState } from "react";
import AnimationWrapper from "../../shared/PageAnimation";
import Loader from "../../components/Loader";
import NoDataMesasge from "../../components/NoData";
import InPageNavigation, {
  activeTabRef,
} from "../../components/InPageNavigation";
import {
  FetchBlogsByCategory,
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
import useAPIHook from "../../hooks/custom/useAPIHook";

const HomePage = () => {
  const initialBlogState = {
    page: 0,
    results: [],
    totalDocs: 0,
  };
  const [blogs, setBlogs] = useState<LocalBlogStateType>(initialBlogState);
  const [trendingBLogs, setTrendingBlogs] = useState<TrendingBlogsResponse[]>(
    [],
  );
  const [pageState, setPageState] = useState("home");
  const [apiCall] = useAPIHook();
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
    const { blogs: latestBlogs }: LatestBlogApiResp = await apiCall(
      FetchLatestBlogs({
        page,
      }),
    );
    if (latestBlogs) {
      const formattedData: LocalBlogStateType = await filterPaginationData({
        state: blogs!,
        data: latestBlogs,
        page: 1,
        countRoute: "/all-latest-blogs-count",
      });
      setBlogs(formattedData);
    }
  };

  const fetchTrendingBlogs = async () => {
    const { blogs: trendingBlogs }: TrendingBlogApiResp =
      await apiCall(FetchTrendingBlogs());
    if (trendingBlogs.length > 0) {
      setTrendingBlogs(trendingBlogs);
    }
  };

  const fetchBlogsByCategory = async (page = 1) => {
    const { blogs: blogbyCategory }: LatestBlogApiResp = await apiCall(
      FetchBlogsByCategory({ page, tag: pageState }),
    );
    if (blogs) {
      const formattedData = await filterPaginationData({
        state: blogs,
        data: blogbyCategory,
        page,
        countRoute: "/search-blogs-count",
        // data_to_send: { tag: pageState },
      });
      setBlogs(formattedData);
    }
  };

  const loadBlogByCategory = (e: MouseEvent) => {
    if (e.target instanceof HTMLButtonElement) {
      const category = e.target.innerHTML.toLowerCase();
      setBlogs(initialBlogState);
      if (pageState === category) {
        setPageState("home");
        return;
      }
      setPageState(category);
    }
  };

  const fetchMoreBlogs = () => {
    if (pageState === "home") {
      fetchLatestBlogs(2);
    } else {
      fetchBlogsByCategory(2);
    }
  };

  useEffect(() => {
    activeTabRef.current.click();
    if (pageState === "home") {
      fetchLatestBlogs();
      fetchTrendingBlogs();
    } else {
      fetchBlogsByCategory();
    }
  }, [pageState]);

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
              <LoadMoreDataBtn state={blogs} fetchDataFun={fetchMoreBlogs} />
            </>
            <>
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
                <NoDataMesasge message="No trending blogs published" />
              )}
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
                      onClick={(e: MouseEvent) => loadBlogByCategory(e)}
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

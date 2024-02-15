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
  // LatestBlogApiResp,
  TrendingBlogApiResp,
} from "../../shared/types/PostsType";

const HomePage = () => {
  // const [blogs, setBlogs] = useState(null);
  const [trendingBLogs] = useState([]);
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

  useEffect(() => {
    const callAPI = async () => {
      const data = await FetchLatestBlogs({ page: 1 });
      const trendingData: TrendingBlogApiResp = await FetchTrendingBlogs();
      console.log(data, "latest blogs");
      console.log(trendingData, "trending blogs");
    };

    callAPI();
  }, []);

  return (
    <AnimationWrapper>
      <section className="h-cover flex justify-center gap-10">
        <div className="w-full">
          <InPageNavigation
            routes={[pageState, "trending blogs"]}
            defaultHidden={["trending blogs"]}
          >
            <h1>Hello 2</h1>
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
                trendingBLogs.map((idx) => {
                  return (
                    <AnimationWrapper
                      key={idx}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                    >
                      {/* <MinimalBlogPost blog={blog} idx={idx} /> */}
                      <h1>Hello</h1>
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

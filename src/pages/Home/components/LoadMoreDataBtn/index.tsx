import { LoadMoreDataBtnPropType } from "../../../../shared/types/PostsType";

const LoadMoreDataBtn = ({ state, fetchDataFun }: LoadMoreDataBtnPropType) => {
  if (state !== null && state.totalDocs > state.results.length) {
    return (
      <button
        className="text-dark-gray p-2 px-3 hover:bg-grey/30 rounded-md flex items-center gap-2"
        onClick={() => fetchDataFun({ page: state.page + 1 })}
      >
        Load more
      </button>
    );
  }
};

export default LoadMoreDataBtn;

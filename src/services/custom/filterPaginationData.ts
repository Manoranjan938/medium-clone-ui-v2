import {
  FilterPaginationDataType,
  LocalBlogStateType,
} from "../../shared/types/PostsType";
import { FetchCount } from "../apis/PostsAPIs";

export const filterPaginationData = async ({
  create_new_array = false,
  state,
  data,
  //   page,
  countRoute,
  data_to_send,
}: FilterPaginationDataType) => {
  let obj: LocalBlogStateType = {
    page: 0,
    results: [],
    totalDocs: 0,
  };
  if (state !== null && create_new_array) {
    // obj = { ...state, results: [...state.results, data], page };
  } else if (data_to_send) {
    const { totalDocs } = await FetchCount({ countRoute, data_to_send });
    if (totalDocs) {
      obj = { results: data, page: 1, totalDocs };
    }
  } else {
    const { totalDocs } = await FetchCount({ countRoute });
    if (totalDocs) {
      obj = { results: data, page: 1, totalDocs };
    }
  }

  return obj;
};

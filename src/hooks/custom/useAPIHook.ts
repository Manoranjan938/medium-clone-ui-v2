/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from "react-redux";
import { updateApiStatus } from "../../store/slices/global";

const useAPIHook = () => {
  const dispatch = useDispatch();

  const apiCall = async (fn: any) => {
    dispatch(updateApiStatus({ error: "", isError: false, loading: true }));
    try {
      const { data, status } = await fn;
      if (status === 200 || status === 201) {
        dispatch(
          updateApiStatus({ error: "", isError: false, loading: false }),
        );
      }
      return data;
    } catch (err) {
      console.log(err);
      dispatch(updateApiStatus({ error: "", isError: true, loading: false }));
    }
  };

  return [apiCall];
};

export default useAPIHook;

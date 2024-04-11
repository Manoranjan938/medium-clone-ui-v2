/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { updateApiStatus } from "../../store/slices/global";

export const useCustomQuery = (
  key: any,
  functions: () => void,
  option: any,
) => {
  const dispatch = useDispatch();
  const { error, isError, isLoading, data } = useQuery({
    queryKey: key,
    queryFn: functions,
    ...option,
  });

  dispatch(
    updateApiStatus({ error: error ? error : "", isError, loading: isLoading }),
  );

  return data;
};

export const useApiSend = (
  fn: any,
  success: any,
  error: any,
  invalidateKey?: any,
  options?: any,
) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const {
    error: newError,
    isError,
    isPending,
    mutate,
  } = useMutation({
    mutationFn: fn,
    onSuccess: (data) => {
      invalidateKey &&
        invalidateKey.forEach((key: any) => {
          queryClient.invalidateQueries(key);
        });
      success && success(data);
    },
    onError: error,
    retry: 2,
    ...options,
  });

  dispatch(
    updateApiStatus({
      error: newError ? newError : "",
      isError,
      loading: isPending,
    }),
  );

  return mutate;
};

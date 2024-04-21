export interface GlobalModel {
  apiStatus: ApiStatusModel;
}

export interface ApiStatusModel {
  loading: boolean;
  isError: boolean;
  error: string | Error;
}

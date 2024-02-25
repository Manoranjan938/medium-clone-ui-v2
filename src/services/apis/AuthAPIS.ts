import { SignInRequest } from "../../shared/types/AuthType";
import buildAxiosClient from "../clients/Axios";

const client = buildAxiosClient();

export const Auth = async (url: string, req: SignInRequest) => {
  const resp = await client.post(url, req);

  return resp;
};

import { SignInRequest } from "../../shared/types/AuthType";
import buildAxiosClient from "../clients/Axios";

const client = buildAxiosClient();

export const SIGN_IN = async (req: SignInRequest) => {
  const resp = await client.post("/signin", req);

  return resp;
};

import axios from "axios";
import { lookIntoSession } from "../../utils/Session";
import { BASE_URL } from "../../shared/constants/URL";
import { AuthResponse } from "../../shared/types/AuthType";

const buildAxiosClient = () => {
  const sessionUser = lookIntoSession("USER");

  if (sessionUser) {
    const parsedData: AuthResponse = JSON.parse(sessionUser);
    return axios.create({
      baseURL: `${BASE_URL}`,
      headers: {
        Authorization: `Bearer ${parsedData.access_token}`,
      },
    });
  } else {
    return axios.create({
      baseURL: `${BASE_URL}`,
    });
  }
};

export default buildAxiosClient;

import axios from "axios";
import queryString from "query-string";

export const IMAGES_DOMAIN = "https://mediaimages.vps.vn";

const axiosClient = axios.create({
  baseURL: "https://cakshop-api.vps.vn/api/ApiMain",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

function jsJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

axiosClient.interceptors.response.use(
  (response) => {
    if (
      response &&
      response?.data &&
      response.data !== "The apikey is wrong!"
    ) {
      let check = jsJson(response.data);

      return check ? JSON.parse(response.data) : response.data;
    }

    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;

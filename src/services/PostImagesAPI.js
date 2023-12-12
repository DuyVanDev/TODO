import axios from "axios";
import queryString from "query-string";

const PostImages = axios.create({
  baseURL: "https://api-v4-erp.vps.vn/api/ApiMain",
  headers: {
    "content-type": "multipart/form-data",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

PostImages.interceptors.request.use(async (config) => {
  return config;
});

PostImages.interceptors.response.use(
  (response) => {
    if (response && response.data && response.data !== "The apikey is wrong!") {
      return response.data.Message;
    }

    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default PostImages;

import axios from "axios";

const API_KEY = "OSW_nrDjgav0Jypp6HJo32qakkrgUVceAUFx06db7fQ";
axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (query, page = 1) => {
  const { data } = await axios.get("/search/photos?", {
    params: {
      query,
      page,
      per_page: 9,
      orientation: "landscape",
    },
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
      "Accept-Version": "v1",
    },
  });
  return data;
};

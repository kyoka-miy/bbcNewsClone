import axios from "axios";

export const BASE_URL = "https://newsapi.org/v2";

const options = {
  params: {
    apiKey: "",
  },
  headers: {
    "X-Api-Key": "",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

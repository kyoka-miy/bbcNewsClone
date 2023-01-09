import axios from "axios";

export const BASE_URL = "https://newsapi.org/v2";

const options = {
  params: {
    apiKey: "a851656a4602487f9f922a8d57d4bac2",
  },
  headers: {
    "X-Api-Key": "a851656a4602487f9f922a8d57d4bac2",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

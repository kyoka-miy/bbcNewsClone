import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsApiHeaders = {
    "X-Api-Key": "",
  };
  const createRequest = (url) => ({ url, headers: newsApiHeaders });
  
  export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://newsapi.org/v2" }),
    endpoints: (builder) => ({
      getNewsCategory: builder.query({
        query: (category) => createRequest(`/top-headlines?country=us&category=${category}`),
      }),
  
      getNewsSearch : builder.query({
        query: (searchTerm) => createRequest(`/everything?q=${searchTerm}`),
      }),
    }),
  });
  
  export const {
    useGetNewsCategoryQuery,
    useGetNewsSearchQuery,
  } = newsApi;

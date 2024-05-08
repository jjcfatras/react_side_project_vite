import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { NewsResponseType } from "./types";

const API_KEY = "22b3ab4b74ce4cdca7b24a92a2df7bb6";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://newsapi.org/v2/`,
  }),
  endpoints: (builder) => ({
    getNewsByCountry: builder.query<NewsResponseType, string>({
      query: (country) => `top-headlines?apiKey=${API_KEY}&country=${country}`,
    }),
  }),
});

export const { useGetNewsByCountryQuery } = newsApi;

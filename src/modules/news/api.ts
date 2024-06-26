import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { countryCode } from "@modules/news/constants";

import type { INewsResponse } from "./types";

const API_KEY = "22b3ab4b74ce4cdca7b24a92a2df7bb6";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://newsapi.org/v2/`,
    signal: new AbortController().signal,
  }),
  endpoints: (builder) => ({
    getNewsByCountry: builder.query<INewsResponse, countryCode>({
      query: (country) => `top-headlines?apiKey=${API_KEY}&country=${country}`,
    }),
  }),
});

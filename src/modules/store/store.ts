/* eslint-disable perfectionist/sort-objects */
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { newsApi } from "../news/api";

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
  enhancers: (getDefaultEnhancers) => getDefaultEnhancers(),
});

setupListeners(store.dispatch);

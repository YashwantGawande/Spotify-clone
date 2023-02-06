import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://genius-song-lyrics1.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "fe2efb820cmsh6d2c7449d61c0c5p19ef3ejsn8d9674a7d613"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () =>
        "/chart/songs/?time_period=all_time&chart_genre=all&per_page=50&page=1",
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;

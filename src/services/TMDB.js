import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const movieApiKey = process.env.REACT_APP_MOVIES_KEY;
const page = '1';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://moviesdatabase.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', movieApiKey);
      headers.set('X-RapidAPI-Host', 'moviesdatabase.p.rapidapi.com');
    },
  }),
  endpoints: (builder) => ({
    getGenres: builder.query({
      query: () => 'titles/utils/genres',
    }),
    getMovies: builder.query({
      query: () => `titles?page=${page}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = movieApi;

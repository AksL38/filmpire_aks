import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const movieApiKey = process.env.REACT_APP_MOVIES_KEY;

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
      query: ({ genreOrCategoryName, type, page, searchQuery }) => {
        if (searchQuery) {
          return `titles/search/title/${searchQuery}?exact=false&page=${page}&endYear=2023&sort=year.decr`;
        }
        if (genreOrCategoryName && type === 'category') {
          switch (genreOrCategoryName) {
            case 'popular':
              return `titles?list=top_boxoffice_last_weekend_10&page=${page}`;
            case 'top_rated':
              return `titles?list=top_rated_english_250&page=${page}`;
            case 'upcoming':
              return `titles/x/upcoming?page=${page}`;
            default:
              break;
          }
        } else if (genreOrCategoryName && type === 'genre') {
          return `titles?genre=${genreOrCategoryName}&page=${page}&endYear=2023&sort=year.decr`;
        }
        return `titles?list=top_boxoffice_last_weekend_10&page=${page}`;
      },
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = movieApi;

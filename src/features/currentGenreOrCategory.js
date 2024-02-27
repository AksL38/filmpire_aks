/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState: {
    genreOrCategoryName: '',
    type: '',
    page: '1',
    searchQuery: '',
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      state.searchQuery = '';
      state.genreOrCategoryName = action.payload.value;
      state.type = action.payload.type;
    },
    searchMovie: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { selectGenreOrCategory, searchMovie } = genreOrCategory.actions;
export default genreOrCategory.reducer;

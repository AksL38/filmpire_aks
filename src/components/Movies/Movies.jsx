import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useGetMoviesQuery } from '../../services/TMDB';
import MovieList from '../MovieList/MovieList';

const Movies = () => {
  const { data, error, isFetching } = useGetMoviesQuery();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" mt="20px">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match given search
          <br />
          Please search for something else
        </Typography>
      </Box>
    );
  }

  if (error)
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          Apologies. We encountered error in fetching data from server
          <br />
          Please try after some time or contact site administrator if issue
          persists
        </Typography>
      </Box>
    );

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;

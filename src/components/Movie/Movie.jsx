import React from 'react';
import { Grid, Grow, Link, Rating, Tooltip, Typography } from '@mui/material';

import useStyles from './styles';

const Movie = ({ movie, i }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link to={`/movie/${movie.id}`} className={classes.links}>
          <img
            alt={movie.title}
            className={classes.image}
            src={
              movie.primaryImage
                ? movie.primaryImage.url
                : 'https://picsum.photos/200/300'
            }
          />
          <Typography className={classes.title} variant="h5">
            {movie.titleText.text}
          </Typography>
          <Tooltip disableTouchListener title="3.5/5">
            <div>
              <Rating readOnly value={3.5} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;

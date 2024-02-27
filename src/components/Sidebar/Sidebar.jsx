import { useTheme } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  CircularProgress,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { useGetGenresQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

const Sidebar = ({ setMobileOpen }) => {
  const { genreOrCategoryName, type } = useSelector(
    (state) => state.currentGenreOrCategory
  );

  const { data, isFetching } = useGetGenresQuery();
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();

  let results = [];
  if (!isFetching) {
    const toBeRemoved = [
      'Adult',
      'Biography',
      'Film-Noir',
      'Game-Show',
      'Musical',
      'News',
      'Reality-TV',
      'Short',
      'Sport',
      'Talk-Show',
    ];
    results = data.results.filter((genre) => {
      if (genre && !toBeRemoved.includes(genre)) return true;
      return false;
    });
  }

  const categories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          src={
            theme.palette.mode === 'light'
              ? 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png'
              : 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png'
          }
          alt="filmpire logo"
          className={classes.image}
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItemButton
              onClick={() =>
                dispatch(selectGenreOrCategory({ type: 'category', value }))
              }
            >
              <ListItemIcon>
                <img
                  src={genreIcons[label.toLowerCase()]}
                  alt=""
                  className="classes.genreImages"
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center" mt="20px">
            <CircularProgress size="4rem" />
          </Box>
        ) : (
          results.map((genre) => (
            <Link key={genre} className={classes.links} to="/">
              <ListItemButton
                onClick={() =>
                  dispatch(
                    selectGenreOrCategory({
                      type: 'genre',
                      value: genre,
                    })
                  )
                }
              >
                <ListItemIcon>
                  <img
                    src={genreIcons[genre.toLowerCase()]}
                    alt=""
                    className="classes.genreImages"
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={genre} />
              </ListItemButton>
            </Link>
          ))
        )}
      </List>
    </>
  );
};

export default Sidebar;

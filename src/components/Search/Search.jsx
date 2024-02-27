import { Search as SearchIcon } from '@mui/icons-material';

import { InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { searchMovie } from '../../features/currentGenreOrCategory';

const Search = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      dispatch(searchMovie(query));
    }
  };

  return (
    <div className={classes.searchContainer}>
      <TextField
        placeholder="search here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        onKeyDown={(e) => handleKeyDown(e)}
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;

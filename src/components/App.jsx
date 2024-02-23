import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import MovieInformation from './MovieInformation/MovieInformation';
import ActorInformation from './ActorInformation/ActorInformation';
import Profile from './Profile/Profile';
import Movies from './Movies/Movies';
import NavBar from './NavBar/NavBar';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>
          <Route exact path="/actor/:id">
            <ActorInformation />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
          <Route exact path="/">
            <Movies />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;

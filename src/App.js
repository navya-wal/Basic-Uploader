import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'
import MovieList from './components/MoviePlatform/MovieList'
import Favorite from './components/MoviePlatform/Favorite'
import Wishlist from './components/MoviePlatform/Wishlist'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/favorites'>
            <Favorite />
          </Route>
          <Route path='/wishlist'>
            <Wishlist />
          </Route>
          <Route path='/'>
            <MovieList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

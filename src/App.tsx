import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Film from './pages/Film';

import FilmType from './types/film.types';
import getFilms from './services/swapi/getFilms';

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [films, setFilms] = useState<FilmType[]>([]);

  // Get all films from the api
  const getFilmsData = async () => {
    setLoading(true);

    try {
      const filmsData: FilmType[] = await getFilms();
      setFilms(filmsData);
      setLoading(false);
    } catch (error) {
      setFilms([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    getFilmsData();
  }, []);

  return (
    <div className="App">
      <div>
        <Router>
          <header>
            <h1>Star Wars Movies</h1>
          </header>

          {loading && 'loading...'}

          {!loading ? (
            <Switch>
              <Route exact path="/echarts-sw">
                <Home films={films} loading={loading} />
              </Route>
              <Route path="/echarts-sw/films/:id">
                <Film films={films} loading={loading} />
              </Route>
            </Switch>
          ) : null}
        </Router>
      </div>
    </div>
  );
}

export default App;

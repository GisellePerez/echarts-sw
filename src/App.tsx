import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Film from './pages/Film';

import FilmType from './types/film.types';
import getFilms from './services/swapi/getFilms';
import Footer from './components/Footer';
import Header from './components/Header';

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
          <Header />

          {loading && (
            <div className="spinner-wrapper">
              <div className="spinner"></div>
            </div>
          )}

          {!loading ? (
            <>
              <Switch>
                <Route exact path="/echarts-sw">
                  <Home films={films} />
                </Route>
                <Route path="/echarts-sw/films/:id">
                  <Film films={films} />
                </Route>
              </Switch>

              <Footer />
            </>
          ) : null}
        </Router>
      </div>
    </div>
  );
}

export default App;

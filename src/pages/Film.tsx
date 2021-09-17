import React, { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Film.css';

import getFilm from '../services/swapi/getFilm';
import FilmType from '../types/film.types';

const Film = (): ReactElement => {
  // Get id in the url using useParams provided by react-router-dom
  const { id } = useParams<{ id: string }>();

  // Initial states
  const [film, setFilm] = useState<FilmType | null>(null);

  // Get film data by id
  // TODO: maybe this call can be saved with context in the parent component
  const getFilmData = async (id: string) => {
    try {
      const filmData: FilmType = await getFilm(id);
      setFilm(filmData);
    } catch (error) {
      setFilm(null);
    }
  };

  const formatDate = (filmDate: string): string => {
    if (filmDate) {
      const regex = new RegExp(/^(.*?)T/, 'gi');
      const match = filmDate.match(regex);

      return match && match.length ? match[0].replace('T', '') : '';
    } else {
      return '';
    }
  };

  useEffect(() => {
    getFilmData(id);
  }, [id]);

  return (
    <main>
      {film && (
        <div>
          <h2>{film.title}</h2>
          <ul>
            <li>
              <h3>Created: {formatDate(film.created && film.created)}</h3>
            </li>

            <li>
              <h3>Amount of characters: {film.characters?.length}</h3>
            </li>
          </ul>
        </div>
      )}
    </main>
  );
};

export default Film;

import React, { ReactElement, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Film.css';

import FilmType from '../types/film.types';
import { BASE_URL } from '../constants/constants';

type FilmProps = {
  films: FilmType[];
  loading: boolean;
};

const Film = ({ films, loading }: FilmProps): ReactElement => {
  // Get id in the url using useParams provided by react-router-dom
  const { id } = useParams<{ id: string }>();

  // Initial state
  const [film, setFilm] = useState<FilmType | null>(null);

  // Get film data by id. This function gets the current movie data by comparing the url from the api and the id used in the url params
  const getFilmData = (filmId: string) => {
    const filmsCopy: FilmType[] = films?.length ? [...films] : [];

    const found =
      filmsCopy && filmsCopy.length
        ? filmsCopy.find(
            (film: FilmType) => film.url === `${BASE_URL}/films/${filmId}/`
          )
        : null;

    found && setFilm(found);
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
    <main className="film-content">
      {film && (
        <div>
          <div className="title-wrapper">
            <Link to="/echarts-sw" className="back-link">
              <span title="Volver" aria-label="Volver">
                &#8592;
              </span>

              <h2>{film.title}</h2>
            </Link>
          </div>

          <ul>
            <li>
              <h3>Created: {formatDate(film.created && film.created)}</h3>
            </li>

            <li>
              <h3>Amount of characters: {film.characters?.length}</h3>
            </li>

            <li>
              <h3>Episode: {film.episode_id}</h3>
            </li>

            <li>
              <h3>Directed by: {film.director}</h3>
            </li>

            <li>
              <h3>Produced by: {film.producer}</h3>
            </li>
          </ul>
        </div>
      )}
    </main>
  );
};

export default Film;

import React, { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Character from '../components/Character';

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

  useEffect(() => {
    getFilmData(id);
  }, [id]);

  useEffect(() => {});

  return (
    <div>
      <h1>FILM</h1>
      {film && (
        <div>
          <h2>{film.title}</h2>
          <h3>{film.created}</h3>

          {/* {film.characters && film.characters.length ? (
            <ul>
              {film.characters.map((character: string) => (
                <li key={character}>
                  <Character characterUrl={character} />
                </li>
              ))}
            </ul>
          ) : null} */}
        </div>
      )}
    </div>
  );
};

export default Film;

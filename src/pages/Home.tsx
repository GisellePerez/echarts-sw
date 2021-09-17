import React, { ReactElement, useEffect, useState } from 'react';
import ReactEcharts from 'echarts-for-react';

import getFilms from '../services/swapi/getFilms';
import Film from '../types/film.types';
import { Link } from 'react-router-dom';

const Home = (): ReactElement => {
  type FormattedFilmData = {
    name: string;
    value: number;
  };

  // Initial states
  const [loading, setLoading] = useState<boolean>(false);
  const [films, setFilms] = useState<Film[]>([]);

  // Get all films
  const getFilmsData = async () => {
    setLoading(true);

    try {
      const filmsData: Film[] = await getFilms();
      setFilms(filmsData);
      setLoading(false);
    } catch (error) {
      setFilms([]);
      setLoading(false);
    }
  };

  const formatFilmsData = (): FormattedFilmData[] => {
    const formattedFilmDataArray: FormattedFilmData[] =
      films && films.length
        ? films.map((film) => {
            const charactersLength =
              film.characters?.length && film.characters?.length;

            return {
              name: `${film.title} - Personajes: ${charactersLength}`,
              value: charactersLength,
            };
          })
        : [];

    return formattedFilmDataArray;
  };

  const getFilmId = (filmUrl: string): string => {
    const regex = new RegExp(/(?<=films\/)./, 'gi');
    const match = filmUrl.match(regex);

    return match && match.length ? match[0] : '';
  };

  const option = {
    series: [
      {
        type: 'treemap',
        data: formatFilmsData(),
      },
    ],
  };

  useEffect(() => {
    getFilmsData();
  }, []);

  return (
    <div>
      <h1>HOME</h1>

      {loading && 'Loading...'}

      {!loading && films && films.length ? (
        <ul>
          {films.map((film: Film) => (
            <li key={film.title}>
              <Link to={`films/${getFilmId(film.url)}`}>
                <h2>{film.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}

      <ReactEcharts style={{ height: 400 }} option={option} />
    </div>
  );
};

export default Home;

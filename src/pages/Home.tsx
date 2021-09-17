import React, { ReactElement, useEffect, useState } from 'react';
import ReactEcharts from 'echarts-for-react';

import getFilms from '../services/swapi/getFilms';
import Film from '../types/film.types';
import { Link } from 'react-router-dom';

const Home = (): ReactElement => {
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

  const getFilmId = (filmUrl: string): string => {
    const regex = new RegExp(/(?<=films\/)./, 'gi');
    const match = filmUrl.match(regex);

    return match && match.length ? match[0] : '';
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

      <ReactEcharts
        option={{
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
            },
          ],
        }}
      />
    </div>
  );
};

export default Home;

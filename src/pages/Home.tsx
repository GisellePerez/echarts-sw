import React, { ReactElement } from 'react';
import ReactEcharts from 'echarts-for-react';
import './Home.css';

import Film from '../types/film.types';
import { Link } from 'react-router-dom';
import FilmType from '../types/film.types';

type HomeProps = {
  films: FilmType[];
  loading: boolean;
};

const Home = ({ films, loading }: HomeProps): ReactElement => {
  type FormattedFilmData = {
    name: string;
    value: number;
  };

  // This function formats the films data and returns the type of object the chart needs
  const formatFilmsData = (): FormattedFilmData[] => {
    const formattedFilmDataArray: FormattedFilmData[] =
      films && films.length
        ? films.map((film) => {
            const charactersLength =
              film.characters?.length && film.characters?.length;

            return {
              name: `${film.title} 
Personajes: ${charactersLength}`,
              value: charactersLength,
            };
          })
        : [];

    return formattedFilmDataArray;
  };

  // This function gets the film id from the url to create the routes to every movie
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
        label: {
          color: '#333',
          fontSize: 14,
          fontStyle: 'bold',
        },
      },
    ],
  };

  return (
    <main>
      {loading && 'Loading...'}

      {!loading && (
        <>
          <section>
            <h2>Films list</h2>
            {films && films.length ? (
              <ul>
                {films.map((film: Film) => (
                  <li key={film.title}>
                    <Link to={`/echarts-sw/films/${getFilmId(film.url)}`}>
                      <h4>
                        {film.title}
                        <span>&#8594;</span>
                      </h4>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>

          <section>
            <h2>Chart</h2>
            <ReactEcharts
              style={{ height: '70vh', width: '100%' }}
              option={option}
            />
          </section>
        </>
      )}
    </main>
  );
};

export default Home;

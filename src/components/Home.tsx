import React, { ReactElement, useEffect, useState } from 'react';
import ReactEcharts from 'echarts-for-react';

import getFilms from '../services/swapi/getFilms';
import Film from '../types/film.types';

const Home = (): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false);
  const [films, setFilms] = useState<Film[]>([]);

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

  useEffect(() => {
    getFilmsData();
  }, []);

  return (
    <div>
      <p>HOME</p>

      {loading && 'Loading...'}

      {!loading && films && films.length
        ? films.map((film: Film) => <p>{film.title}</p>)
        : null}

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

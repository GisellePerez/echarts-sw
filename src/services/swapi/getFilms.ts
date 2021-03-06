import { BASE_URL } from '../../constants/constants';
import FilmType from '../../types/film.types';

const getFilms = (): Promise<FilmType[]> => {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/films`)
      .then((response) => response.json())
      .then((data) => {
        if (data?.error) {
          reject(data?.error);
        } else {
          resolve(data?.results);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default getFilms;

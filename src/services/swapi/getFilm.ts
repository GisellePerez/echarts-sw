import { BASE_URL } from '../../constants/constants';
import FilmType from '../../types/film.types';

const getFilm = (id: string): Promise<FilmType> => {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/films/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data?.error) {
          reject(data?.error);
        } else {
          resolve(data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default getFilm;

import CharacterType from '../../types/character.types';

const getCharacter = (url: string): Promise<CharacterType> => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log('character', data);
          resolve(data);
        } else {
          if (data.error) {
            reject(data?.error);
          }
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default getCharacter;

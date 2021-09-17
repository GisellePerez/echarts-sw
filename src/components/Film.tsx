import React, { ReactElement, useEffect, useState } from 'react';
import getCharacter from '../services/swapi/getCharacter';
import Character from '../types/character.types';

const Film = (): ReactElement => {
  const [character, setCharacter] = useState<Character | null>(null);

  const getCharacterData = async (url: string) => {
    try {
      const characterData: Character = await getCharacter(url);
      setCharacter(characterData);
    } catch (error) {
      setCharacter(null);
    }
  };

  useEffect(() => {
    getCharacterData('https://swapi.dev/api/people/1/');
  }, []);
  return (
    <div>
      <p>CHARACTER</p>
      {character && character.name}
    </div>
  );
};

export default Film;

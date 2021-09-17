import React, { ReactElement, useEffect, useState } from 'react';
import getCharacter from '../services/swapi/getCharacter';
import CharacterType from '../types/character.types';

type CharacterProps = {
  characterUrl: string;
};

const Character = ({ characterUrl }: CharacterProps): ReactElement => {
  const [character, setCharacter] = useState<CharacterType | null>(null);

  const getCharacterData = async (url: string) => {
    try {
      const characterData: CharacterType = await getCharacter(url);
      setCharacter(characterData);
    } catch (error) {
      setCharacter(null);
    }
  };

  useEffect(() => {
    getCharacterData(characterUrl);
  }, [characterUrl]);
  return (
    <div>
      <h3>CHARACTER</h3>
      {character && character.name}
    </div>
  );
};

export default Character;

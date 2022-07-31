import { useEffect, useState } from 'react';
import { rickAndMortyUrl } from './services/rickAndMorty';

export default function NotUsingSWR() {
  const [characters, setCharacters] = useState({ info: {}, results: [] });

  const getCharacters = async () => {
    const response = await fetch(rickAndMortyUrl).then(res => res.json());
    setCharacters(response);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      {characters.results.map(character => (
        <div key={character.id}>{character.name}</div>
      ))}
    </div>
  );
}

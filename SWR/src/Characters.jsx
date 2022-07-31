import useSWR from 'swr';
import { fetchRickAndMorty, rickAndMortyLocationUrl, rickAndMortyUrl } from './services/rickAndMorty';

export default function Characters() {
  const { data: characters } = useSWR(rickAndMortyUrl, fetchRickAndMorty);
  const { data: locations } = useSWR(rickAndMortyLocationUrl, fetchRickAndMorty);
  
  return (
    <div>
      {characters.results.map(character => (
        <div key={character.id}>{character.name}</div>
      ))}

      <h3>Locations</h3>

      {locations.results.map(character => (
        <div key={character.id}>{character.name}</div>
      ))}
    </div>
  );
}

export const rickAndMortyUrl ='https://rickandmortyapi.com/api/character';
export const rickAndMortyLocationUrl ='https://rickandmortyapi.com/api/location';

export const fetchRickAndMorty = async (url) => {
   return fetch(url).then(res => res.json())
}

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export const getPokemonList = (limit = 20, offset = 0) => {
  return api.get(`/pokemon?limit=${limit}&offset=${offset}`);
};

export const getPokemonDetails = (url) => {
  return axios.get(url);
};

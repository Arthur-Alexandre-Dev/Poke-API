import React, { useState, useEffect, useMemo, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getPokemonList, getPokemonDetails } from '../services/api';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [allTypes, setAllTypes] = useState([]);
  const [loadingDots, setLoadingDots] = useState('');

  const fetchPokemon = async () => {
    const response = await getPokemonList(20, pokemon.length);
    setNextUrl(response.data.next);
    const newPokemon = await Promise.all(
      response.data.results.map(async (item) => {
        const detailsResponse = await getPokemonDetails(item.url);
        return detailsResponse.data;
      })
    );

    const uniquePokemon = Array.from(new Map([...pokemon, ...newPokemon].map(poke => [poke.id, poke])).values());
    setPokemon(uniquePokemon);
    updateAllTypes(uniquePokemon);
  };

  const updateAllTypes = (pokemonList) => {
    const types = new Set(pokemonList.flatMap(p => p.types.map(t => t.type.name)));
    setAllTypes(Array.from(types));
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingDots(prev => (prev.length < 3 ? prev + '.' : ''));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleTypeChange = (e) => setSelectedType(e.target.value);

  const filteredPokemon = useMemo(() => {
    return pokemon.filter((poke) => {
      const matchesSearch = poke.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === '' || poke.types.some(type => type.type.name === selectedType);
      return matchesSearch && matchesType;
    });
  }, [pokemon, searchTerm, selectedType]);

  return (
    <div className="pokemon-list">
      <div className="header-fixed">
        <h1>Pokédex</h1>
        <div className="filters">
          <input
            type="text"
            placeholder="Pesquisar Pokémon"
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <select value={selectedType} onChange={handleTypeChange} className="type-select">
            <option value="">Todos</option>
            {allTypes.map(type => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="content">
        <InfiniteScroll
          dataLength={filteredPokemon.length}
          next={fetchPokemon}
          hasMore={!!nextUrl}
          loader={filteredPokemon.length === 0 ? null : <div className="loading">Buscando Pokémons{loadingDots}</div>}
        >
          <div className="pokemon-grid">
            {filteredPokemon.length > 0 ? (
              filteredPokemon.map((poke) => (
                <PokemonCard key={poke.id} pokemon={poke} />
              ))
            ) : null}
          </div>
        </InfiniteScroll>
        {filteredPokemon.length === 0 && (
          <div className="no-pokemon">Pokémon não existe.</div>
        )}
      </div>
    </div>
  );
};

export default PokemonList;

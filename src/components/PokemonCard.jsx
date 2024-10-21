import React, { useState } from 'react';
import '../styles/PokemonCard.css';

const typeColors = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC'
};

const PokemonCard = ({ pokemon }) => {
  const [flipped, setFlipped] = useState(false);
  const animatedSprite = pokemon.sprites.versions['generation-v']['black-white'].animated.front_default;
  const defaultSprite = pokemon.sprites.front_default;
  const spriteToDisplay = animatedSprite || defaultSprite || 'path/to/default/image.png';

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`pokemon-card ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="card-inner">
        <div className="card-front">
          <img src={spriteToDisplay} alt={pokemon.name} />
          <h2>{pokemon.name}</h2>
          <div>
            {pokemon.types.map(type => (
              <span
                key={type.type.name}
                className="pokemon-type"
                style={{ backgroundColor: typeColors[type.type.name] }}
              >
                {type.type.name}
              </span>
            ))}
          </div>
          <p>#{pokemon.id.toString().padStart(3, '0')}</p>
        </div>
        <div className="card-back">
          <h3 className="stats-title">Stats</h3>
          <div className="attributes">
            <p>HP: {pokemon.stats[0].base_stat}</p>
            <p>Attack: {pokemon.stats[1].base_stat}</p>
            <p>Defense: {pokemon.stats[2].base_stat}</p>
            <p>Speed Attack: {pokemon.stats[3].base_stat}</p>
            <p>Speed Defense: {pokemon.stats[4].base_stat}</p>
            <p>Speed: {pokemon.stats[5].base_stat}</p>
            <p className="overall">Overall: {pokemon.stats.reduce((acc, stat) => acc + stat.base_stat, 0)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;

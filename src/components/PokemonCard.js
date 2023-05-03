import React from 'react'

const PokemonCard = ({ pokemon }) => {
    console.log(pokemon, 'pokemon');
  return (
    <div className='pokemonCard'>
        {pokemon.name}
        </div>
  )
}

export default PokemonCard
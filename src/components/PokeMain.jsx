import React from 'react'
import PokemonCard from './Pokedex/PokemonCard'

const PokeMain = ({pokemons, pokemonSearch}) => {

 if(!pokemonSearch){
    return (
        <div className="flex justify-center flex-wrap gap-4">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.url} pokemon={pokemon.url} />
        ))}
      </div>
  )
 }else{
    return(
        <div className="container_CardPoke">
          <PokemonCard pokemon={pokemonSearch}/>    
        </div>
    )
 }
}

export default PokeMain
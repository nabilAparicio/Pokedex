import React from 'react'
import PokemonCard from './Pokedex/PokemonCard'

const PokeMain = ({Pokemons,  pokemonSearch}) => {
 
 if(!pokemonSearch){
    return (
        <div className="flex justify-center flex-wrap gap-4">
        {Pokemons?.results.map((pokemon) => (
          <PokemonCard key={pokemon.url} url={pokemon.url} />
        ))}
      </div>
  )
 }else{

    return(
        <div className="container_CardPoke">
          <PokemonCard url={pokemonSearch}/>    
        </div>
    )
 }
}

export default PokeMain
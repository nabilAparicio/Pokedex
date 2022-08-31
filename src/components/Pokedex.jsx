import axios from "axios";
import React from "react";
import PokemonCard from "./Pokedex/PokemonCard";
import { useState, useEffect } from "react";
import Pagination from "./Pokedex/Pagination";
import PokeHero from "./Pokedex/PokeHero";
import PokeMain from "./PokeMain";
import Search from "./search/search";
import Filters from "./Filters/Filters";



const Pokedex = () => {
  const [pokemons, setPokemons] = useState();
  const [pokemonSearch, setPokemonSearch] = useState()
  const [PokeLimit, setPokeLimit] = useState(20);
  const [offSet, setOffSet] = useState(0);
  const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${PokeLimit}`;

  useEffect(() => {
    const url=`https://pokeapi.co/api/v2/pokemon`
    axios
      .get(url)
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.log(err));
  }, []);



  return (
    <div>
      <div>
        <PokeHero />
      </div>
      <div className="action_menu">
          <Search pokemonSearch={pokemonSearch} setPokemonSearch={setPokemonSearch}/>
          <Filters setPokemons={setPokemons}/>
       </div>
      {
      pokemons && <PokeMain pokemons={pokemons} setPokemons={setPokemons} pokemonSearch={pokemonSearch}/>
      } 
      
      {pokemons ? (
        <Pagination
          pokemons={pokemons}
          pokelimit={PokeLimit}
          setOffSet={setOffSet}
          offSet={offSet}
        />
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default Pokedex;

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
  const [Pokemons, setPokemons] = useState();
  const [pokemonSearch, setPokemonSearch] = useState()
  const [PokeLimit, setPokeLimit] = useState(20);
  const [offSet, setOffSet] = useState(0);
  const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${PokeLimit}`;

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setPokemons(res.data))
      .catch((err) => console.log(err));
  }, [offSet]);


  return (
    <div>
      <div>
        <PokeHero />
      </div>
      <div className="action_menu">
          <Search pokemonSearch={pokemonSearch} setPokemonSearch={setPokemonSearch}/>
          <Filters setPokemons={setPokemons}/>
       </div>
      <PokeMain Pokemons={Pokemons} setPokemons={setPokemons} pokemonSearch={pokemonSearch}/>
      
      {Pokemons ? (
        <Pagination
          pokemons={Pokemons}
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

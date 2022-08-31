import axios from "axios";
import React from "react";
import PokemonCard from "./Pokedex/PokemonCard";
import { useState, useEffect } from "react";
import Pagination from "./Pokedex/Pagination";
import PokeHero from "./Pokedex/PokeHero";
import Search from "./Pokedex/Search/Search";
import { useSelector } from "react-redux";
const Pokedex = () => {
  const [Pokemons, setPokemons] = useState();
  const [PokeLimit, setPokeLimit] = useState(20);
  const [offSet, setOffSet] = useState(0);
  const Toggle = useSelector((state) => state.toggleSwitchSlice);
  const TypeName = useSelector((state) => state.pokeTypeNameSlice);

  const DefaultURL = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${PokeLimit}`;
  const Searchurl =
    Toggle == false
      ? `https://pokeapi.co/api/v2/type/${TypeName}`
      : `https://pokeapi.co/api/v2/pokemon/${TypeName}`;
  const URL = TypeName == "" ? DefaultURL : Searchurl;
  console.log(URL);
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setPokemons(res.data))
      .catch((err) => console.log(err));
  }, [offSet, TypeName]);

  return (
    <div className="bg-red-50 p-5 pt-10 ">
      <div>
        <PokeHero />
      </div>
      <div>
        <Search />
      </div>
      <div className="flex justify-center flex-wrap gap-4">
        {Pokemons ? (
          Pokemons.results.map((pokemon) => (
            <PokemonCard key={pokemon.url} pokemon={pokemon.url} />
          ))
        ) : (
          <div>pokemon card</div>
        )}
      </div>
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

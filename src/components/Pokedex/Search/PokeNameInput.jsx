import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const PokeNameInput = () => {
  const [PokeNames, setPokeNames] = useState();
  const URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=3000";
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setPokeNames(res.data.results.map((x) => x.name)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div class=" relative ">
        <input
          list="pokemonNames"
          type="text"
          id="rounded-email"
          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Your Pokemon Name"
        />
        <datalist id="pokemonNames">
          {PokeNames?.map((x) => (
            <option>{x}</option>
          ))}
        </datalist>
      </div>
    </div>
  );
};

export default PokeNameInput;

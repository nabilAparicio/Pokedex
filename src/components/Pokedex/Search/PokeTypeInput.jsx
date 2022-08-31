import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTypeName } from "../../../store/slice/pokeTypeName.slice";
const PokeTypeInput = () => {
  const dispatch = useDispatch();
  const [PokeTypes, setPokeTypes] = useState();
  const URL = "https://pokeapi.co/api/v2/type/";
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setPokeTypes(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div class=" relative ">
        <input
          onChange={(e) => dispatch(setTypeName(e.target.value))}
          list="pokemonTypes"
          type="text"
          id="rounded-email"
          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Your Pokemon Type"
        />
        <datalist id="pokemonTypes">
          {PokeTypes?.map((x) => (
            <option>{x.name}</option>
          ))}
        </datalist>
      </div>
    </div>
  );
};

export default PokeTypeInput;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainCard from "./PokemonDetails/MainCard";

const PokemonDetails = () => {
  const [Pokemon, setPokemon] = useState();
  const { id } = useParams();
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex place-content-center h-screen py-36">
      {Pokemon ? <MainCard Pokemon={Pokemon} /> : <div>loading</div>}
    </div>
  );
};

export default PokemonDetails;

import React from "react";
import { useSelector } from "react-redux";

const PokeHero = () => {
  const nameTrainer = useSelector((state) => state.nameTrainerSlice);
  return (
    <div className="flex flex-col items-center my-28">
      <h1 className="text-4xl font-extrabold ">Welcome to your Pokedex</h1>
      <p className="mt-5">
        Hi
        <span className="font-bold"> {nameTrainer} </span>
        here you can find all the info about your pokemons{" "}
      </p>
     
    </div>
  );
};

export default PokeHero;

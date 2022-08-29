import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import CardLoader from "../Loaders/CardLoader";
import { Link } from "react-router-dom";
import pokemonTypes from "../../assets/PokeTypesTailwind";
const PokemonCard = ({ pokemon }) => {
  const URL = pokemon;
  const [PokeCard, setPokeCard] = useState();
  const typeColor = pokemonTypes[PokeCard?.types[0].type.name] || "slate-100";
  const bgStyle = {
    backGColor: { backgroundColor: `${typeColor}` },
  };

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setPokeCard(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {PokeCard ? (
        <Link to={`/pokedex${PokeCard.name}`}>
          <section>
            <article
              class="mx-auto max-w-sm shadow-xl bg-cover bg-center h-150 w-72 transform duration-500 hover:-translate-y-2 cursor-pointer group"
              style={{
                backgroundImage: `url(${PokeCard.sprites.other["official-artwork"].front_default})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <div class="bg-black bg-opacity-20 h-96 px-10 flex flex-wrap flex-col pt-56 hover:bg-opacity-75 transform duration-300">
                <h1 class="text-white text-3xl mb-3 transform translate-y-20 group-hover:-translate-y-0 duration-300">
                  {PokeCard.name}
                </h1>
                <div
                  class="w-16 h-4 bg-yellow-500 text-xs text-center  rounded-full mb-3 transform translate-y-20 group-hover:translate-y-0 duration-300"
                  style={bgStyle.backGColor}
                ></div>
                <div className="w-full ">
                  <p class="opacity-0  text-white text-md group-hover:opacity-80 transform duration-500">
                    Type: {PokeCard.types[0].type.name}
                    <br />
                    Base Experience: {PokeCard.base_experience}
                    <br />
                    Height: {PokeCard.height}
                  </p>
                </div>
              </div>
            </article>
          </section>
        </Link>
      ) : (
        <CardLoader />
      )}
    </div>
  );
};

export default PokemonCard;

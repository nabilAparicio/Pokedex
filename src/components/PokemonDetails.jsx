import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AbilitiesCard from './PokemonDetails/AbilitiesCard'
import MainCard from './PokemonDetails/MainCard'
import MovementsCard from './PokemonDetails/MovementsCard'
import TypeCard from './PokemonDetails/TypeCard'
import pokemonTypes from '../assets/PokeTypesTailwind'
import PokeImages from './PokemonDetails/PokeImages'
const PokemonDetails = () => {
  const [Pokemon, setPokemon] = useState()
  const { id } = useParams()
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
  const typeColor = pokemonTypes[Pokemon?.types[0].type.name] || 'slate-100'
  const bgStyle = {
    backGColor: {
      backgroundImage: `url(https://github.com/nabilAparicio/Pokedex/blob/main/src/assets/images/BG.png?raw=true)`,
      backgroundRepeat: 'repeat',
      backgroundSize: 'contain',
      backgroundColor: `${typeColor}`
    }
  }
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <div>
      {Pokemon ? (
        <div
          className=" p-20 pt-32 min-h-screen flex bg-red-400 justify-center gap-3"
          style={bgStyle.backGColor}>
          <div className=" flex gap-2 flex-col w-7/12">
            <MainCard Pokemon={Pokemon} />
            <div className="flex gap-2">
              <TypeCard Pokemon={Pokemon} />
              <AbilitiesCard Pokemon={Pokemon} />
            </div>
            <PokeImages Pokemon={Pokemon} />
          </div>
          <div className="p-3 shadow bg-white rounded w-3/12">
            <MovementsCard Pokemon={Pokemon} />
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  )
}

export default PokemonDetails

import axios from 'axios'
import PokemonCard from './Pokedex/PokemonCard'
import { useState, useEffect } from 'react'
import Pagination from './Pokedex/Pagination'
import PokeHero from './Pokedex/PokeHero'
const Pokedex = () => {
  const [Pokemons, setPokemons] = useState()
  const [PokeLimit] = useState(20)
  const [offSet, setOffSet] = useState(0)

  const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${PokeLimit}`

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setPokemons(res.data))
      .catch((err) => console.log(err))
  }, [offSet])

  const bgStyle = {
    backGColor: {
      backgroundImage: `url(https://github.com/nabilAparicio/Pokedex/blob/main/src/assets/images/BG.png?raw=true)`,
      backgroundRepeat: 'repeat',
      backgroundSize: 'contain'
    }
  }

  return (
    <div style={bgStyle.backGColor} className="bg-red-50 p-5 pt-10 ">
      <div>
        <PokeHero />
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
  )
}

export default Pokedex

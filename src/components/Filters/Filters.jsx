import axios from 'axios'
import React from 'react'

import { useEffect,useState } from 'react'
const Filters = ({setPokemons}) => {

        const [typePokemon, setTypePokemon] = useState()
        const [filterPokemon, setFilterPokemon] = useState()
    
    
    useEffect(() => {
        const URLType = `https://pokeapi.co/api/v2/type/`
             axios.get(URLType)
        .    then(res => setTypePokemon(res.data.results))
    }, [])
    
      useEffect(() => {
        let change = []
        if (filterPokemon){
            //recorro filter pokemon y push solo a la posicion donde esta pokemonpara que me quedwe como el stado de la url unica
            for (let i = 0; i < filterPokemon.length; i++) {
                const element = filterPokemon[i].pokemon;
                change.push(element)
            }
           setPokemons(change)
        }
    
        }, [filterPokemon])
    
        function handleFilter2 (e){
            axios.get(`https://pokeapi.co/api/v2/type/${e.target.value}`)
            .then(res => setFilterPokemon(res.data.pokemon))
            .catch(err=>console.log(err))
        }
      
    
      return (
        <div>
        <select className='filter_options' onChange={handleFilter2}>
            <option value=''>All</option>
            {
                typePokemon?.map(pokemons => (
                    <option  value={pokemons.name} key={pokemons.name}>{pokemons.name}</option>
                ))
            }
        </select>
        </div>
      )
    }


export default Filters
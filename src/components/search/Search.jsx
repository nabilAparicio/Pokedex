import React from 'react'
import { useState } from 'react'
import './search.css'

const Search = ({pokemonSearch, setPokemonSearch}) => {

    const [search, setSearch] = useState()

    const handleSubmit = e => {
        e.preventDefault()
        if(e.target.search.value){
          setSearch(e.target.search.value)
          setPokemonSearch(`https://pokeapi.co/api/v2/pokemon/${e.target.search.value}`)
        }else{
          setPokemonSearch('')
        }
   
       }

    return (
         <form onSubmit={handleSubmit}>
        <input className="search" 
        id='search' 
        type="text"       
        placeholder='Search for Pokemon'
        />
        <button className='btn_search'>Search</button>
    </form>
  )
}

export default Search 
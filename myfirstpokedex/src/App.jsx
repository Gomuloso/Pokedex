import { useEffect, useState } from 'react'
import './App.css'
import Searcher from './components/Searcher'
import Display from './components/Display'

function App() {
  const [userSearch, setUserSearch] = useState('')
  const [pokemon, setPokemon] = useState({})

  const searchPokemon = async (search) => {
    console.log("User search: " + userSearch)
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + search)
    const pokemonData = await response.json()
    console.log("pokemon data", pokemonData)
    setPokemon(pokemonData)
  }


  useEffect(() => {
    searchPokemon(userSearch)
  }, [userSearch])


  return (
    <>
      <Searcher userSearch={userSearch} setUserSearch={setUserSearch} />
      {
        pokemon &&
        <Display pokemon={pokemon}></Display>
      }

    </>
  )
}

export default App

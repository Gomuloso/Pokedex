import React, { useEffect } from 'react'

export default function Display({ pokemon }) {

  useEffect(() => {
    console.log(`el link es: ${pokemon?.sprites?.front_default}`)
  }, [pokemon])

 

  return (
    <div>
      <p>{pokemon?.id}</p>
      <audio controls src={`audio/${pokemon?.id}.ogg`}>
        <source type="audio/ogg" />
        <p>
          lol
        </p>
      </audio>
      <img src={pokemon?.sprites?.front_default}></img>
      <img src={pokemon?.sprites?.front_shiny}></img>
    
      <img src={`tipos/${pokemon?.types?.[0]?.type?.name}.jpg`}>
      </img>{
         pokemon?.types?.[1]?.type?.name &&
        <img src={`tipos/${pokemon?.types?.[1]?.type?.name}.jpg`}>
        </img>
      }
    </div>)
}

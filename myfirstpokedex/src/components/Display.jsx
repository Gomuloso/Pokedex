import React, { useEffect } from 'react'

export default function Display({ pokemon }) {
  return (
    <div>
      <p>{pokemon?.id}</p>

      <div> <img src={pokemon?.sprites?.front_default}></img>
        <img src={pokemon?.sprites?.front_shiny}></img></div>


      <div><audio controls src={`audio/${pokemon?.id}.ogg`}>
        <source type="audio/ogg" />
      </audio>
      </div>
      <div>
      <img src={`tipos/${pokemon?.types?.[0]?.type?.name}.jpg`}>
      </img>{
        pokemon?.types?.[1]?.type?.name &&
        <img src={`tipos/${pokemon?.types?.[1]?.type?.name}.jpg`}>
        </img>
      }</div>
    </div>)
    
}
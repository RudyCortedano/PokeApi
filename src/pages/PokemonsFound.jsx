import React from 'react'
import { useSelector } from 'react-redux'

const PokemonsFound = () => {
  const pokeID = useSelector(store => store.pokemonFoundSlice)
  console.log(pokeID)
  return (
    <div>
      <img src={pokeID?.sprites.other["official-artwork"].front_default} alt="" />
    </div>
  )
}

export default PokemonsFound
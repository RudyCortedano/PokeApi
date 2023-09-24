import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const PokedexIDPages = () => {

    const {id} = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const [ pokemon, getPokemon, hasError, loading ] = useFetch(url)

    useEffect (() => {
        getPokemon()
    }, [id])    

    console.log(pokemon)

  return (
    <article>
      <header className='card__imageposition'>
            <img className='card__image' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
    </article>
  )
}

export default PokedexIDPages
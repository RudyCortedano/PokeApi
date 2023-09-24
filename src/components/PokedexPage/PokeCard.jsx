import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

const PokeCard = ({url}) => {

  const [ pokemon, getPokemon ] = useFetch(url)
  const navigate = useNavigate()

  useEffect (() => {
    getPokemon()
  }, [])

//   console.log(pokemon)

  const handleNavigate = () =>{
        navigate(`/pokedex/${pokemon.id}`)
  }

  console.log(pokemon)
  
  return (
    <article className='card__pokemon' onClick={handleNavigate}>
        <header className='card__imageposition'>
            <img className='card__image' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className='card__section'>
            <h3 className='card__namePokemon'>{pokemon?.name}</h3>
            <ul className='card__types' >
                {
                    pokemon?.types.map((typeInfo) =>(
                        <div className={`${typeInfo.type.name} card__types__styles`} key={typeInfo.type.url}>                    
                                <li>{typeInfo.type.name}</li>                    
                        </div>
                    ))
                }
            </ul>
            <hr />
            <ul className='card__list__stats'>
                {
                    pokemon?.stats.map(stateInfo =>(
                        <li key={stateInfo.stat.url}>
                            <span className='card__stat__name'>{stateInfo.stat.name}</span>
                            <span className='card__card__stat'>{stateInfo.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
    </article>
  )
}

export default PokeCard
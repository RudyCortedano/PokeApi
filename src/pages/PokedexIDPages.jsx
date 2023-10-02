import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import SwitchGlobal from "../components/compGenerales/SwitchGlobal";
import Spinner from "../components/compGenerales/Spinner";
// import Navbar from "../components/compGenerales/Navbar";

const PokedexIDPages = () => {
  const { id } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const [pokemon, getPokemon, opcion3, opcion4, opcion5, loading] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, [id]);

  const checked = useSelector(store => store.checkedSlice)

  console.log(pokemon)

  if(loading){
    return <Spinner/>
  }

  return (
    <>
      <nav className="navbar__switchHomePage">
        <SwitchGlobal/>
      </nav>
      <article className="cardID__global">
        <header className={checked ? "cardID__imageStats__nigth":"cardID__imageStats"}>
        <section className="cardID__imageposition">
          <img
            className="cardID__image"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
          <h2>#{pokemon?.id}</h2>
          <h3>{pokemon?.name}</h3>
          <ul className='cardID__imagespostion__types' >
            {
              pokemon?.types.map((typeInfo) =>(
                  <div className={`${typeInfo.type.name} card__types__styles`} key={typeInfo.type.url}>                    
                    <li>{typeInfo.type.name}</li>                    
                  </div>
              ))
            }            
          </ul>
          <ul className="cardID__date__list">
            <li>{pokemon?.height/10}m</li>
            <li>{pokemon?.weight/10}kg</li>
          </ul>
        </section>

        <section className="cardID__stats">
          <h3>Stats</h3>
          <ul>
            {pokemon?.stats.map((estadistica, key) => (
              <>
              <span>{estadistica.stat.name}</span>
              <div
                key={key}             
                style={{
                  width: "250px",
                  height: "20px",
                  background: "white",      
                  borderRadius: "10px",
                }}
              >
                <div
                  className={pokemon?.types[0].type.name}
                  style={{
                    height: "20px",
                    width: `${estadistica.base_stat}px`,
                    color: "white",          
                    paddingInline: ".5rem",
                    borderRadius: "10px",
                    fontSize: "12px",
                    display: "flex",
                    alignItems:"center"
                  }}
                >
                  {estadistica.base_stat}          
                </div>
         
              </div>
          
              </>
            ))}
           
          </ul> 
        </section>
        </header>       

        <section className="cardID__moves">
          <h2 className={checked ? "CardID__title__nigth":"CardID__title__day"}>All moves</h2>
            <ul  className={checked ? "cardID__move__listNigth":"cardID__move__list"}>
              {
                pokemon?.moves.map(move=>(
                 <li key={move.move.url} className={`${pokemon?.types[0].type.name} cardID__moves__box`} >{move.move.name}</li>
                ))
              }
            </ul>
        </section>
      </article>
    </>
  );
};

export default PokedexIDPages;

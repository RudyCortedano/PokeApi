import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import LinearProgress from "@mui/material/LinearProgress";

const PokedexIDPages = () => {
  const { id } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const [pokemon, getPokemon, hasError, loading] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, [id]);

  console.log(pokemon);

  return (
    <>
      <article className="cardID__global">
        <header className="cardID__imageposition">
          <img
            className="cardID__image"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </header>
        <span>{pokemon?.id}</span>
        <h1>{pokemon?.name}</h1>
        <ul className="card__types">
          {pokemon?.types.map((typeInfo) => (
            <div
              className={`${typeInfo.type.name} card__types__styles`}
              key={typeInfo.type.url}
            >
              <li>{typeInfo.type.name}</li>
            </div>
          ))}
        </ul>
      </article>
      <ul>
        {pokemon?.stats.map((estadistica, key) => (
          <div key={key}>
           
          </div>
        ))}
      </ul>
    </>
  );
};

export default PokedexIDPages;

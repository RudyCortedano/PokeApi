import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import PokeCard from "../components/PokedexPage/PokeCard";
import SelectType from "../components/PokedexPage/SelectType";
import Navbar from "../components/compGenerales/Navbar";
import PaginationAllPoke from "../components/PokedexPage/PaginationAllPoke";
import Acoordion from "../components/PokedexPage/Acoordion";

const PokedexPage = () => {
  const nameTrainer = useSelector((store) => store.trainerSlice);
  // ------------------------------------------------------------------------------------------------//
  // consumo de la pokeApi de los 1292 pokemones
  // console.log(nameTrainer);

  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000";
  const [pokemons, getPokemons, getTypesPokemons, setInfoApi, hasError, loading] =
    useFetch(url);
  // ------------------------------------------------------------------------------------------------//
  //  enpoints de pokemon general y por tipos
  const [inputValue, setInputValue] = useState("");
  const [typeSelected, setTypeSelected] = useState("Allpokemons");

  useEffect(() => {
    if (typeSelected === "Allpokemons") {
      getPokemons();
    } else {
      getTypesPokemons(typeSelected);
    }
  }, [typeSelected]);

  // ------------------------------------------------------------------------------------------------//
  // filtro de busqueda
  const pokeFiltered = pokemons?.results.filter((pokFilter) =>
    pokFilter.name.includes(inputValue)
  );
  // ------------------------------------------------------------------------------------------------//
  // paginacion
  // Esta info va en el componente global useContext o redux
  const itemsPerPage = 20;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = pokeFiltered?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(pokemons?.results.length / itemsPerPage);

  const handleChange = (event, value) => {
    const value2 = value - 1;
    const newOffset = value2 * itemsPerPage;

    setItemOffset(newOffset);
  };
  // ------------------------------------------------------------------------------------------------//

  return (
    <>
      <Navbar pokemons={pokemons}setInfoApi={setInfoApi}/>
      <p>Hi {nameTrainer}</p>

      <input type="checkbox"  className="checkPanel" id="checkPanel"/>
      <header className="header__panel">
        <div className="header__content">
          {/* <SelectType setTypeSelected={setTypeSelected} /> */}
          <Acoordion setTypeSelected={setTypeSelected} setInfoApi={setInfoApi}/>
        </div>
      </header>

      <div className="cards__global">
        {currentItems?.map((poke) => (
          <PokeCard url={poke.url} key={poke.url} />
        ))}
      </div>

      <PaginationAllPoke pageCount={pageCount} handleChange={handleChange} />
    </>
  );
};

export default PokedexPage;
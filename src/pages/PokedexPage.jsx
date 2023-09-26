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
  const [
    pokemons,
    getPokemons,
    getTypesPokemons,
    setInfoApi,
    hasError,
    loading,
  ] = useFetch(url);
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
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = pokeFiltered?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(pokeFiltered?.length / itemsPerPage);

  const handleChange = (event, value) => {
    const value2 = value - 1;
    const newOffset = value2 * itemsPerPage;

    setItemOffset(newOffset);
  };
  const paginateLimit = pokeFiltered?.length >= itemsPerPage;
  // ------------------------------------------------------------------------------------------------//

  return (
    <>
      <Navbar
        setTypeSelected={setTypeSelected}
        setInputValue={setInputValue} pokemons={pokemons}
        setInfoApi={setInfoApi}
        setItemOffset={setItemOffset}
      />

      <p>Hi {nameTrainer}</p>

      <input type="checkbox" className="checkPanel" id="checkPanel" />
      <header className="header__panel">
        <div className="header__content"> 

          <Acoordion
            setTypeSelected={setTypeSelected}
            setInfoApi={setInfoApi}
            setInputValue={setInputValue} 
            setItemOffset={setItemOffset}
            setItemsPerPage={setItemsPerPage}
          />

        </div>
      <label className="headerExitPanel" htmlFor="checkPanel"></label>
      </header>

      <div className="cards__global">   
        {currentItems?.map((poke) => (
          <PokeCard url={poke.url} key={poke.url} />
        ))} 
      </div>

      <PaginationAllPoke
        pageCount={pageCount}
        handleChange={handleChange} 
        paginateLimit={paginateLimit}
      />
    </>
  );
};

export default PokedexPage;

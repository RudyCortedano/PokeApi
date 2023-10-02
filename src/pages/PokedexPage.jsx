import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import PokeCard from "../components/PokedexPage/PokeCard";
import Navbar from "../components/compGenerales/Navbar";
import PaginationAllPoke from "../components/PokedexPage/PaginationAllPoke";
import Acoordion from "../components/PokedexPage/Acoordion";
import { Navigate } from "react-router-dom";
import BackgroundAnimated from "../components/compGenerales/BackgroundAnimated";
import Spinner from "../components/compGenerales/Spinner";

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
    setLoading
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
  const [itemsPerPage, setItemsPerPage] = useState(30);
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

  const checked = useSelector((store) => store.checkedSlice);

  if(loading){
    return <Spinner/>
  }

  return (
    <>
    <BackgroundAnimated/>
      {currentItems?.length === 0 ? (      
        <Navigate to='/error' />
      ) : (
        <>
          <Navbar
            setTypeSelected={setTypeSelected}
            setInputValue={setInputValue}
            pokemons={pokemons}
            setInfoApi={setInfoApi}
            setItemOffset={setItemOffset}
            loading={loading}
            setLoading={setLoading}
          />  

          <input type="checkbox" className="checkPanel" id="checkPanel" />
          <section
            className={checked ? "header__panel__nigth" : "header__panel__day"}
          >
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
          </section>

          <div className="welcome">
            <div
              className={
                checked ? "welcome__content__nigth" : "welcome__content"
              }
            >
              <p>✨✨ Hi {nameTrainer} ✨✨</p>
            </div>
          </div>

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
      )}
    </>
  );
};

export default PokedexPage;

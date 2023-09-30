import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import SwitchGlobal from "../compGenerales/SwitchGlobal";
import { useSelector } from "react-redux";

const Acoordion = ({
  setTypeSelected,
  setInputValue,
  setItemOffset,
  setItemsPerPage,
}) => {
  const url = `https://pokeapi.co/api/v2/type`;
  const [types, getTypes] = useFetch(url);

  const checked = useSelector(store => store.checkedSlice)

  useEffect(() => {
    getTypes();
  }, [types]);

  const arrayNum = [5, 10, 15, 20, 25, 30];

  return (
    <>
      <div className="panelLeft">
        <div className="panel__container">
          <div className="switch__acordion">
            <SwitchGlobal />
          </div>

          <div className="navbar__panel__movil">
           <Link className="navbar__link label__title" to='/'>Home</Link>    

            <div className="navbar__item" onClick={() => {
                setTypeSelected("Allpokemons")
                setInputValue("")
                setItemOffset(0)
              }}><Link className="navbar__link label__title" >All Pokemons</Link></div>

          </div>

          <input type="checkbox" id="checkDropdown" className="menuDropdown" />
          <label htmlFor="checkDropdown" className="label__title">
            <span className="panel__title">Types</span>
            <div className="icon">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </label>

          <div className={checked ? "content__nigth":"content__day"}>
            <div className="menu__pc">
              <Link
                htmlFor="checkPanel"
                className={checked ? "option__nigth":"option__day"}
                onClick={() => {
                  setTypeSelected("Allpokemons");
                  setInputValue("");
                  setItemOffset(0);
                }}
              >
                All Pokemons
              </Link>
              {types?.results.map((type) => (
                <Link
                  onClick={() => {
                    setTypeSelected(type.url);
                    setInputValue("");
                    setItemOffset(0);
                  }}
                  htmlFor="checkPanel"
                  className={checked ? "option__nigth":"option__day"}
                  key={type.url}
                >
                  {type.name}
                </Link>
              ))}
            </div>
            <div className="menu__movil">
              <label
                htmlFor="checkPanel"
                className={checked ? "option__nigth":"option__day"}
                onClick={() => {
                  setTypeSelected("Allpokemons");
                  setInputValue("");
                  setItemOffset(0);
                }}
              >
                All Pokemons
              </label>
              {types?.results.map((type) => (
                <label
                  onClick={() => {
                    setTypeSelected(type.url);
                    setInputValue("");
                    setItemOffset(0);
                  }}
                  htmlFor="checkPanel"
                  className={checked ? "option__nigth":"option__day"}
                  key={type.url}
                >
                  {type.name}
                </label>
              ))}
            </div>
          </div>
        </div>

        <input type="checkbox" id="checkDropdown2" className="menuDropdown" />
        <label htmlFor="checkDropdown2" className="label__title">
          <span className="panel__title">N° per page</span>
          <div className="icon">
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </label>

        <div className={checked ? "content__nigth":"content__day"}>
          <div className=" menu__pc">
            {arrayNum.map((num) => (
              <Link
                key={num}
                className={checked ? "option__nigth":"option__day"}
                onClick={() => setItemsPerPage(num)}
              >
                {num}
              </Link>
            ))}
          </div>

          <div className=" menu__movil">
            {arrayNum.map((num) => (
              <label
                htmlFor="checkPanel"
                key={num}
                className={checked ? "option__nigth":"option__day"}
                onClick={() => setItemsPerPage(num)}
              >
                {num}
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Acoordion;

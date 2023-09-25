import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Acoordion = ({setTypeSelected, setInputValue}) => {
    const url = `https://pokeapi.co/api/v2/type`;
    const [types, getTypes] = useFetch(url);
  
    useEffect (() => {
      getTypes()
    }, [types])

  
    const handleChange = e =>{
      setTypeSelected( e.target.value)   
    }
  return (
    <> 
      <div className="panelLeft">
        <div className="panel__container" onChange={handleChange}>
          <input type="checkbox" id="checkDropdown" className="menuDropdown"/>         
          <label   htmlFor="checkDropdown" className="label__title">
            <span className="panel__title">Types</span>
            <div className="icon">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            </label>      

          <div className="content"  >
          {
            types?.results.map(type =>(
                <label 
                  htmlFor="checkPanel"                 
                  onClick={() =>{
                    setTypeSelected(type.url)
                    setInputValue("")
                  }} 
                  className="option" 
                  key={type.url}          
                >
                  <div>{type.name}</div>
                </label>
            ))
          }
          </div>
        </div>
      </div>
    </>
  );
};

export default Acoordion;

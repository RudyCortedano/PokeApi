import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";

const Acoordion = ({setTypeSelected, setInputValue,setItemOffset,setItemsPerPage}) => {
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
          <Link className="option" onClick={() => {
              setTypeSelected("Allpokemons")
              setInputValue("")
              setItemOffset(0)
            }}>All Pokemons</Link>     
          {
            types?.results.map(type =>(     
                <Link                  
                  onClick={() =>{
                    setTypeSelected(type.url)
                    setInputValue("")
                    setItemOffset(0)
                  }} 
                  className="option" 
                  key={type.url}          
                >             
                  <div className="focus">{type.name}</div>
                </Link>    
            ))
          }
          </div>   
        </div>

        <div className="panel__container">
        <input type="checkbox" id="checkDropdown2" className="menuDropdown"/>         
          <label   htmlFor="checkDropdown2" className="label__title">
            <span className="panel__title">N° per page</span>
            <div className="icon">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </label>
        </div>
  

      </div>
    </>
  );
};

export default Acoordion;

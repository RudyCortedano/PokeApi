import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

const Acoordion = ({setTypeSelected, setInfoApi}) => {
    const url = `https://pokeapi.co/api/v2/type`;
    const [types, getTypes] = useFetch(url);
  
    useEffect (() => {
      getTypes()
    }, [])

    const [prueba, setPrueba] = useState()
    console.log(prueba)
  
    // console.log(types)
  
    const handleChange = e =>{
      setTypeSelected( e.target.value)   
    }
  return (
    <>
      {/* <input type="checkbox" id="checkMenu" className="menu"/> */}
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
                <li onClick={() =>setTypeSelected(type.url)} className="option" value={type.url} key={type.url}>{type.name}</li>
            ))
          }
          </div>
        </div>
      </div>
    </>
  );
};

export default Acoordion;

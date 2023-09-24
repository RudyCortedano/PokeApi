import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const SelectType = ({setTypeSelected}) => {
  const url = `https://pokeapi.co/api/v2/type`;
  const [types, getTypes] = useFetch(url);

  useEffect (() => {
    getTypes()
  }, [])

  // console.log(types)

  const handleChange = e =>{
    setTypeSelected( e.target.value)   
  }
  
  return (
    <div className="section__types">
      <select onChange={handleChange}>
        <option>All pokemons</option>
        
        {
            types?.results.map(type =>(
                <option value={type.url} key={type.url}>{type.name}</option>
            ))
        }
        
   
 
      </select>
    </div>
  );
};

export default SelectType;

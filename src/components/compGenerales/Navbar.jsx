import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = ({pokemons,setInfoApi}) => {
    const inputSearch = useRef();
    const handleSearch = (e) => {
      e.preventDefault();
      setInputValue(inputSearch.current.value.trim().toLowerCase());
    };
  return (
    <nav className="navbar__init">
      <div className="navbar__iconLogo">
      <label className="navbar__iconMenu" htmlFor="checkPanel"><i className="fa-solid fa-bars"></i></label>
      <img className="navbar__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
      </div>
     
      <div className="navbar__formListInfo">
        <ul className="navbar__list">
              <li className="navbar__item"><Link className="navbar__link" to='/'>Home</Link></li>
              <li className="navbar__item" onClick={() => setInfoApi(pokemons)}>All Pokemons</li>
          </ul>
        <form onSubmit={handleSearch}>
          <input type="text" ref={inputSearch} />
        </form>
      </div>

    </nav>
  );
};

export default Navbar;

import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({
  setItemOffset,
  setInputValue,
  setTypeSelected,
  inputValue,
}) => {
  const navigate = useNavigate();

  const inputSearch = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    setInputValue(inputSearch.current.value.trim().toLowerCase());
    // navigate('/pokemonFound');
    setTypeSelected("Allpokemons");
    setItemOffset(0);
  };

  const checked = useSelector((store) => store.checkedSlice);

  return (
    <div className={checked ? "navbar__nigth" : "navbar__day"}>
      <nav className="navbar__init">
        <div className="navbar__iconLogo">
          <label className="navbar__iconMenu" htmlFor="checkPanel">
            <i className="fa-solid fa-bars"></i>
          </label>
          <img
            onClick={() => {
              setTypeSelected("Allpokemons");
              setInputValue("");
              setItemOffset(0);
            }}
            className="navbar__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
            alt=""
          />
        </div>

        <div className="navbar__formList">
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link className="navbar__link" to="/">
                Home
              </Link>
            </li>
            <li
              className="navbar__item"
              onClick={() => {
                setTypeSelected("Allpokemons");
                setInputValue("");
                setItemOffset(0);
            
              }}
            >
              <Link to='/pokedex' className="navbar__link">All Pokemons</Link>
            </li>
          </ul>

          <form className="navbar__form" onSubmit={handleSearch}>
            <input className="navbar__input" type="text" ref={inputSearch} />
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

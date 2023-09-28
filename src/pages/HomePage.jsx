import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrainerSlice } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";
import SwitchGlobal from "../components/compGenerales/SwitchGlobal";

const HomePage = () => {

  const inputTrainer = useRef();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleTrainer = e =>{
    e.preventDefault()
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
    navigate("/pokedex")
  }

  const checked = useSelector(store => store.checkedSlice)
  console.log(checked)

  return (
  <>
    <header className="home__global">

      <nav className="navbar__switchHomePage">
        <SwitchGlobal/>
      </nav> 

      <div className="home__init">

        <div className="home__content">
          <h1 className="home__title">Pokedex</h1>
              <h2 className="home__welcome">Hi Trainer!</h2>
              <p>To start, please, enter your trainer name</p>
              <form onSubmit={handleTrainer}>
                <input required className="home__input" ref={inputTrainer} type="text" />
                <button className="home__button">Start!</button>
              </form>      
        </div>

      </div>

    </header>
  </>



  );
};

export default HomePage;

import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setTrainerSlice } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const inputTrainer = useRef();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleTrainer = e =>{
    e.preventDefault()
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
    navigate("/pokedex")
  }

  return (
    <div className="home__init">
      <h1 className="home__title">Pokedex</h1>
      <h2 className="home__welcome">Hi Trainer!</h2>
      <p>To start, please, enter your trainer name</p>
      <form onSubmit={handleTrainer}>
        <input ref={inputTrainer} type="text" />
        <button>Start!</button>
      </form>      
    </div>
  );
};

export default HomePage;

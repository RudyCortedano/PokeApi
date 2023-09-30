import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrainerSlice } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";
import SwitchGlobal from "../components/compGenerales/SwitchGlobal";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModalHome from "../components/HomePage/ModalHome";

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
        <ModalHome handleTrainer={handleTrainer} inputTrainer={inputTrainer} />
      </div>

    </header>
  </>
  );
};

export default HomePage;

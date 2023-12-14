import React from 'react'
import { useSelector } from 'react-redux'
import BackgroundAnimated from '../compGenerales/BackgroundAnimated'
import { useNavigate } from 'react-router-dom'

const HasError = () => {
  const checked = useSelector(store => store.checkedSlice)
  const navigate = useNavigate()
  return (
    <>
    <BackgroundAnimated/>
    <nav className='navbar__not_found'>
      <label className="navbar__btnBack" onClick={() => navigate('/pokedex')}><i className="fa-solid fa-arrow-left-long"></i></label>
    </nav>
    <div className={checked ? "HasError__nigth" : "HasError"}>
      <section>No se encontro ningun resultado❌😢</section>
    </div>
    </>
  )
}

export default HasError
import React from 'react'
import { useSelector } from 'react-redux'
import BackgroundAnimated from '../compGenerales/BackgroundAnimated'

const HasError = () => {
  const checked = useSelector(store => store.checkedSlice)
  return (
    <>
    <BackgroundAnimated/>
    <div className={checked ? "HasError__nigth" : "HasError"}>
      <section>No se encontro ningun resultado❌😢</section>
    </div>
    </>
  )
}

export default HasError
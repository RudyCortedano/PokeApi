import React from 'react'
import { useSelector } from 'react-redux';
import BackgroundAnimated from '../components/compGenerales/BackgroundAnimated';

const RouteFail = () => {
  const checked = useSelector(store => store.checkedSlice)
  return (
    <>
    <BackgroundAnimated/>
    <header  className={checked ? "RouteFail__nigth" : "RouteFail"}>
      <div className=''>Esta ruta no existe❌</div>
    </header>
    </>
  )
}

export default RouteFail;
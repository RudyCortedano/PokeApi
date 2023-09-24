import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {

    const nameTrainer = useSelector(store => store.trainerSlice)

    if(nameTrainer !== ""){
      return  (
        <>         
          <Outlet/>
        </>
      )
    }else{
     return  <Navigate to='/'/>
    } 
};

export default ProtectedRoutes;

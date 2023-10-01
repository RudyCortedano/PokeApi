import { Ripples } from "@uiball/loaders";
import React from "react";
import { useSelector } from "react-redux";

const Spinner = () => {
  const checked = useSelector(store => store.checkedSlice)
  return (
    <div className="spinner">
      <Ripples size={100} speed={2} color={checked ? "white":"black"} />
    </div>
  );
};

export default Spinner;


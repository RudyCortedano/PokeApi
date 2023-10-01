import { Ripples } from "@uiball/loaders";
import React from "react";

const Spinner = () => {

  return (
    <div className="spinner">
      <Ripples size={120} speed={2} color="white" />
    </div>
  );
};

export default Spinner;


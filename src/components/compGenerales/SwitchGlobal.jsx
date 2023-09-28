import React from "react";
import ReactSwitch from "react-switch";
import { useDispatch, useSelector } from "react-redux";
import { setCheckedSlice } from "../../store/slices/check.slice";


const SwitchGlobal = () => {
  const checked = useSelector(store => store.checkedSlice)
  const dispatch = useDispatch()
 
  const handleChange = () =>{
    dispatch(setCheckedSlice(!checked))
  }
  return (
    <div className="switch">
       <span className="switch__icon"><i className="fa-solid fa-sun" style={{color: checked ? "white" : "yellow"}}></i></span>
      <label htmlFor="material-switch">
        <ReactSwitch
          checked={checked}
          onChange={handleChange}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
          id="material-switch"
        />
      </label>
      <span className="switch__icon"><i className="fa-solid fa-moon" style={{color: checked ? " #a60dc5" : "white"}}></i></span>
    </div>
  );
};

export default SwitchGlobal;

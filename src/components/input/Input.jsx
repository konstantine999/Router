import React from "react";
import "./input.css";

function Input(props) {
  return (
    <div className="input-wrapper">
      <label htmlFor="">{props.placeholder}</label>
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
}

export default Input;

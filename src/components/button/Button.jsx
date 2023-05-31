import React from "react";
import "./button.css";

function Button(props) {
  return <button style={{ marginTop: props.margin }}>{props.text}</button>;
}

export default Button;

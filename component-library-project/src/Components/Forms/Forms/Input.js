import React from "react";
// import "./Form.css";
// This is a functional component - just sent up a little differently as an arrow function!

const Input = props => (
  <>
    <label for={props.label}>{props.label}</label>
    <input
      name={props.label}
      label={props.label}
      placeholder={props.label}
      className={props.type}
    />
  </>
);


export default Input;


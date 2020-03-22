import React, { Component } from "react";

const InputButton = props => (
  <form className="form-frame">
    <button className={props.typeButton} onClick={props.onClick}> {props.labelButton}</button>
  </form>
);

export default InputButton;

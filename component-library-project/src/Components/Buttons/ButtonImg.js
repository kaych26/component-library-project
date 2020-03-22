import React from "react";

const ButtonImg = props => (
  <button className={props.type}><img src={props.img}/></button>
);

export default ButtonImg;

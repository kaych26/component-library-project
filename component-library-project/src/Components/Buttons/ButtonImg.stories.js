import React from "react";
import { storiesOf } from "@storybook/react";

import ButtonImg from "./ButtonImg";
import "./ButtonImg.css";
import  addToCartImg from "../../Images/AddToCart.png";
import  addToFavImg from "../../Images/addToFavorite.png";
import  heartImg from "../../Images/heart.png";
import  cartImg from "../../Images/cart.png";

storiesOf("Button", module)
  // .add("Primary", () => <Button label="Primary" style={style} />)

  .add("AddToCart", () => <ButtonImg img={addToCartImg} type="addToCart-class" />)
  .add("AddToFavorite", () => <ButtonImg img={addToFavImg} type="addToFovorite-class" />)
  .add("Heart", () => <ButtonImg img={heartImg} type="heart-class" />)
  .add("Cart", () => <ButtonImg img={cartImg} type="cart-class" />)

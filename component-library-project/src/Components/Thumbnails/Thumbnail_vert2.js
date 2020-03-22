import React from "react";
import Picture1 from "../../Images/laptop_info.png";
import HoverPicture from "../../Images/laptop_info_hover2.png";
const Thumbnail2 = props => (
  <>
    <img className="mainImage" src={Picture1} />
    <img className="hoverImage" src={HoverPicture} />
  </>
);
export default Thumbnail2;

import React from "react";
import Picture1 from '../../Images/laptop_info.png'
import HoverPicture from '../../Images/laptop_info_hover.png'
const Thumbnail = props => (
  <>
    <img className='mainImage' src={Picture1} />
    <img className='hoverImage' src={HoverPicture} />
  </>
);
export default Thumbnail;
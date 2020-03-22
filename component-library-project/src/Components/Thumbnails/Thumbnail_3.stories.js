import React from "react";
import { storiesOf } from "@storybook/react";
import Thumbnail_3 from "./Thumbnail_3";
import Picture1 from "../../Images/laptop_info3.png";
import Picture2 from "../../Images/laptop_info4.png";
import Picture3 from "../../Images/headphone.png";
import Picture4 from "../../Images/laptop_info5.png";
// import HoverPicture from "../../Images/laptop_info_hover.png";

import "./Thumbnail_3.css";

storiesOf("Thumbnails", module)
  .add("Thumbnail_3", () => <Thumbnail_3 class="image-class"image={Picture1} />)
  .add("Thumbnail_4", () => <Thumbnail_3 class="image-class2"image={Picture2} />)
  .add("Thumbnail_5", () => <Thumbnail_3 class="image-class3"image={Picture3} />)
  .add("Thumbnail_6", () => <Thumbnail_3 class="image-class4"image={Picture4} />)


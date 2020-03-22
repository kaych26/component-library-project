import React from "react";
import { storiesOf } from "@storybook/react";
import Thumbnail2 from "./Thumbnail_vert2";
import Picture1 from "../../Images/laptop_info.png";
import HoverPicture from "../../Images/laptop_info_hover2.png";

import "./Thumbnail_vert.css";

storiesOf("Thumbnails", module).add("Thumbnail_2", () => (
  <Thumbnail2 mainPicture={Picture1} hoverPicture={HoverPicture} />
));

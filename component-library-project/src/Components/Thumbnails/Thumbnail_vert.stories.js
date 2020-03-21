import React from "react";
import { storiesOf } from "@storybook/react";
import Thumbnail from "./Thumbnail_vert";
import Picture1 from "../../Images/laptop_info.png";
import HoverPicture from "../../Images/laptop_info_hover.png";

import "./Thumbnail_vert.css";

storiesOf("Thumbnails", module).add("Thumbnails", () => (
  <Thumbnail mainPicture={Picture1} hoverPicture={HoverPicture} />
));

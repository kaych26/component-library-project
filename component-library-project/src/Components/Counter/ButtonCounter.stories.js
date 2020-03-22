import React from "react";
import { storiesOf } from "@storybook/react";
import "./ButtonCounter.css";

import Counter from "./ButtonCounter";

storiesOf("Counter", module).add("Test", () => (
  <Counter value={2} startValue={0} minValue={-5} maxValue={20} />
));

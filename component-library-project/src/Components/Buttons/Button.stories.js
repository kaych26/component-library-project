import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";
import "./Button.css";

storiesOf("Button", module)
  // .add("Primary", () => <Button label="Primary" style={style} />)

  .add("Primary", () => <Button label="Do something" type="primary" />)
  .add("Primary Hover ", () => <Button label="Do something" type="primary-hover" />)
  .add("Primary Outline", () => <Button label="Do something" type="primary-outline" />)
  .add("Success", () => <Button label="Do something" type="success" />)
  .add("Success Hover", () => <Button label="Do something" type="success-hover" />)
  .add("Success Outline", () => <Button label="Do something" type="success-outline" />)
  .add("Danger", () => <Button label="Do something" type="danger" />)
  .add("Danger Hover", () => <Button label="Do something" type="danger-hover" />)
  .add("Danger Outline", () => <Button label="Do something" type="danger-outline" />)
  .add("Warning", () => <Button label="Do something" type="warning" />)
  .add("Warning Hover", () => <Button label="Do something" type="warning-hover" />)
  .add("Warning Outline", () => <Button label="Do something" type="warning-outline" />)
  

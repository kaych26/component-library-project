import React from "react";
import { storiesOf } from "@storybook/react";

import Input from "./Input";
import "./Input.css";

storiesOf("Inputs", module)
  .add("Input small", () => <Input label="Email" type="input-small" />)
  .add("Input medium", () => <Input label="Email" type="input-medium" />)
  .add("Input large", () => <Input label="Email" type="input-large" />)
  ;

// storiesOf("Forms", module).add("Input large", () => (
//   <Input label="Email" type="input-large" />
// ));

// storiesOf("Forms", module)
//   .add("Primary", () => <Form label="Primary" type="primary" />)
//   .add("Primary Hover ", () => <Form label="Primary" type="primary-hover" />)
//   .add("Primary Outline", () => <Form label="Primary" type="primary-outline" />)
//   .add("Success", () => <Form label="Success" type="success" />)
//   .add("Success Hover", () => <Form label="Success" type="success-hover" />)
//   .add("Success Outline", () => <Form label="Success" type="success-outline" />)
//   .add("Danger", () => <Form label="Danger" type="danger" />)
//   .add("Danger Hover", () => <Form label="Danger" type="danger-hover" />)
//   .add("Danger Outline", () => <Form label="Danger" type="danger-outline" />)
//   .add("Warning", () => <Form label="Warning" type="warning" />)
//   .add("Warning Hover", () => <Form label="Warning" type="warning-hover" />)

//   ));

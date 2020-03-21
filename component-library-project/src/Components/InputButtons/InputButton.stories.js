import React from "react";
import { storiesOf } from "@storybook/react";

import Input from "../Forms/Input";
import InputButton from "./InputButton";

import "./InputButton.css";

storiesOf("InputButtons", module).add("InputButton medium", () => (
  <form>
    <Input placeholder="Voucher code" type="input-medium" />
    <InputButton labelButton="Redeem" typeButton="button-medium" />
  </form>
))
.add("InputButton large", () => (
  <form>
    <Input placeholder="Voucher code" type="input-large" />
    <InputButton labelButton="Redeem" typeButton="button-large" />
  </form>
));

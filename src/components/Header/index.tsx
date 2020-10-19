import React from "react";
import { HeaderMenu, MenuItem } from "../Menu";

import logo from "../../assets/images/CNN.svg";

export const Header = () => {
  return (
    <HeaderMenu logo={logo}>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
    </HeaderMenu>
  );
};

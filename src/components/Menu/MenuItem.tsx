import React from "react";
import styleSheet from "./index.module.scss";

interface IProps {
  className?: any;
  children?: string;
}

export const MenuItem = (props: IProps) => {
  return <li {...props} className={styleSheet.active}></li>;
};

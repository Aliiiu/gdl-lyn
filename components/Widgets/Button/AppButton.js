import React from "react";
import { Button } from "./appbutton.style";
import { Link } from "react-scroll";

export const AppButton = ({ onPress, loading, ...props }) => (
  <Link to="our-product" spy={true} smooth={true} offset={-70} duration={1000}>
    <Button
      {...props}
      className={props.className}
      onClick={onPress}
      disabled={props.disabled}
    >
      {props.icon && props.icon}
      {props.name}
    </Button>
  </Link>
);

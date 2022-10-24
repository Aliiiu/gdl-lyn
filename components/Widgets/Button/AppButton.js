import Link from "next/link";
import React from "react";
import { Button } from "./appbutton.style";
// import { Link } from "react-scroll";

export const AppButton = ({ onPress, loading, ...props }) => (
  <Link href={"/get-started"}>
    <Button
      {...props}
      type="submit"
      className={`transition ease-in-out duration-700 ${
        props.className || " px-4 py-3 bg-[#992333] text-white"
      }`}
      onClick={onPress}
      disabled={props.disabled}
    >
      {/* {props.icon && props.icon}
      {props.name} */}
      <div className="flex items-center justify-between w-full font-light">
        <span className={`${props.textSize || "md:text-sm text-sm"}`}>
          {props.name}
        </span>
        {props.icon && <div className="ml-2">{props.icon}</div>}
      </div>
    </Button>
  </Link>
);

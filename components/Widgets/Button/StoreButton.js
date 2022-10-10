import React from "react";
import { Button } from "./storebutton.style";
import { Link } from "react-scroll";
import Image from "next/image";
import CustomImage from "../CustomImage/CustomImage";

export const StoreButton = ({ onPress, loading, ...props }) => (
  <Button
    {...props}
    className={props.className}
    onClick={onPress}
    disabled={props.disabled}
  >
    {props.icon && props.icon}
    {props.name}
  </Button>
);

export const Content = ({ icon, ...props }) => (
  <Link
    to="our-product"
    spy={true}
    smooth={true}
    offset={-70}
    duration={1000}
    className="flex self-center items-center justify-center"
  >
    <div className="icon-div flex-shrink-0">
      {/* <Image src={props.img} alt='' style={{ width: '20px' }} /> */}
      <CustomImage
        src={props.img}
        className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"
      />
    </div>
    <div className="flex flex-col pl-2 md:pl-4 items-start">
      <span
        className="m-0 p-0 hidden md:block leading-none text-xs"
        style={{ fontSize: "10px" }}
      >
        Download on the
      </span>
      <span className="font-bold text-base lg:text-md leading-none">
        {props.type}
      </span>

      {/* <span className="m-0 p-0 text-lg font-bold bg-blue-300">Play Store</span> */}
    </div>
  </Link>
);

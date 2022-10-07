import React from "react";
import { CardContainer } from "./card.style";

const Card = props => (
  <CardContainer {...props} className="flex flex-col rounded-2xl">
    <div className="top flex justify-between">
      <div className="topic font-bold text-white">
        <span>{props.title}</span>
      </div>
      <div className="round-box bg-gray-800"></div>
    </div>
    <div className="bottom pt-2">
      <small>{props.sub_title}</small>
    </div>
  </CardContainer>
);

export default Card;

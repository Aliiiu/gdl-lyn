import React from "react";

const ListComponent = props => (
  <>
    <div className="lg:mx-auto text-left">
      <ul>
        <li className="text-black font-semibold text-base mb-1 lg:mb-2">
          {props.name}
        </li>
        {props.items.map((content, index) => (
          <li key={content} className="font-light text-black text-sm mb-1">
            <a href="javascript:void(0)">{content}</a>
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default ListComponent;

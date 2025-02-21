import React from "react";
import tick from "./../assets/images/tick.png";

function TickListBox({ data, isVertical }) {
  return (
    <div className="flex flex-col">
      <h3 className="fw-bolder">{data.title}</h3>
      <ul className={`flex ${isVertical ? "flex-col" : "flex-row"} pt-5`}>
        {data.items.map((txt, idx) => {
          return (
            <li
              key={idx}
              className={`flex flex-row ${isVertical ? "" : "mr-5"}`}
            >
              <img
                className="object-full w-10 h-10"
                src={tick}
                alt="tick"
              ></img>
              <p className="py-3">{txt}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TickListBox;

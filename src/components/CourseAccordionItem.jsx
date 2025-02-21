import React, { useState } from "react";
import arrowUp from "./../assets/images/arrow-up.png";
import arrowDown from "./../assets/images/arrow-down.png";
import playarrow from "./../assets/images/play-arrow.png";
import videolist from "./../assets/images/videolist.png";

function CourseAccordionItem({ state, title, datalist, isList }) {
  const [isOpen, setIsOpen] = useState(state);

  const arrow = isOpen ? arrowDown : arrowUp;

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col flex-wrap mb-2">
      <button
        // className="flex flex-row bg-[#F4F4F4] w-full justify-between cursor-pointer p-3"
        className={`flex flex-row  w-full justify-between cursor-pointer p-3 ${
          isList ? "bg-[#F4F4F4]" : "bg-white"
        } ${isList ? "" : "px-5 border-[#F4F4F4] border-b-2"}`}
        onClick={() => handleOpen()}
      >
        <h4>{title}</h4>

        <div className="flex flex-row gap-3 space-x-10">
          {isList && (
            <div className="flex flex-wrap flex-row space-x-2">
              <img className="w-6 h-6 object-cover" src={videolist} />
              <p>2 Weeks</p>
            </div>
          )}
          <img className="w-7 h-7 object-cover" src={arrow} />
        </div>
      </button>

      {isOpen && (
        <div className="transition-all duration-500 ease-in-out overflow-hidden">
          {isList && (
            <ul className="p-5">
              {datalist.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="flex flex-row space-x-2 space-y-2 cursor-pointer"
                  >
                    <img className="w-6 h-6" src={playarrow}></img>
                    <p>{item}</p>
                  </li>
                );
              })}
            </ul>
          )}
          {!isList && <div className="bg-white p-5">{datalist}</div>}
        </div>
      )}
    </div>
  );
}

export default CourseAccordionItem;

import React from "react";
import arrownext from "./../assets/images/arrow_next.png";
import arrowprev from "./../assets/images/arrow_prev.png";

function SliderNextArrow({ onClick }) {
  return <img className="cursor-pointer" src={arrownext} onClick={onClick} />;
}

function SliderPrevArrow({ onClick }) {
  return <img className="cursor-pointer" src={arrowprev} onClick={onClick} />;
}

export { SliderNextArrow, SliderPrevArrow };

import React from "react";
import arrownext from "./../assets/images/arrow_next.png";
import arrowprev from "./../assets/images/arrow_prev.png";

function SliderNextArrow({ onClick }) {
  return (
    <img
      className="w-10 h-10 object-contain cursor-pointer"
      src={arrownext}
      onClick={onClick}
    />
  );
}

function SliderPrevArrow({ onClick }) {
  return (
    <img
      className="w-10 h-10 object-contain cursor-pointer"
      src={arrowprev}
      onClick={onClick}
    />
  );
}

export { SliderNextArrow, SliderPrevArrow };

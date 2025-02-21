import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderNextArrow, SliderPrevArrow } from "./SliderArrows";

function SlickSlider({ isTitle, title, imageSrcList, norow, noslides }) {
  const sliderRef = useRef(null);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: noslides,
    speed: 500,
    rows: norow,
    slidesPerRow: 2,
  };

  const header = isTitle ? <h1>{title}</h1> : <p>{title}</p>;
  return (
    <>
      <div className="flex flex-row justify-between py-5 mx-auto ">
        {header}
        <div className="flex flex-row space-x-3">
          <SliderPrevArrow onClick={() => sliderRef.current.slickPrev()} />
          <SliderNextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {imageSrcList.map((imgsrc, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-center pb-5"
            >
              <img
                src={imgsrc}
                alt={`Slide ${index + 1}`}
                className="w-[100px] h-[50px] object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default SlickSlider;

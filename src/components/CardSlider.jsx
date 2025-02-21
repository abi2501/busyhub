import React, { useRef } from "react";
import { SliderNextArrow, SliderPrevArrow } from "./SliderArrows";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AvatarCard from "./AvatarCard";

function CardSlider({ cardData, subtitle }) {
  const sliderRef = useRef(null);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 2,
    speed: 500,
    rows: 1,
    slidesPerColumn: 2,
  };

  return (
    <>
      <div className="flex flex-row justify-between py-5 mx-auto ">
        <p className="pt-3">{subtitle}</p>
        <div className="flex flex-row space-x-3">
          <SliderPrevArrow onClick={() => sliderRef.current.slickPrev()} />
          <SliderNextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings} className="gap-5">
          {cardData.datalist.map((data, idx) => (
            <AvatarCard
              key={idx}
              cardData={data}
              isQuoted={cardData.isQouted}
            />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default CardSlider;

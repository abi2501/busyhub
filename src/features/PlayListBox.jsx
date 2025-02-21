import React from "react";
import youtube from "./../assets/images/video-youtube.png";
import play from "./../assets/images/play.png";

import { keyInclusions } from "../constants/constant";
import roudedTick from "./../assets/images/rounded-tick.png";
import share from "./../assets/images/share.png";
import globe from "./../assets/images/globe.png";
import ButtonPrimary from "../components/Button";
import download from "./../assets/images/down-brochure.png";

function PlayListBox() {
  return (
    <>
      <div className="flex flex-col p-3 shadow-lg rounded-md">
        <div className=" mx-auto flex items-center justify-center">
          <div className="relative mx-auto flex items-center justify-center">
            <img
              src={youtube}
              alt="Main Content"
              className="w-full h-full object-cover"
            />

            {/* Centered Image Button */}
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg">
              <img src={play} alt="Button" className="w-20 h-20 object-fit" />
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between pt-5">
          <div
            className="border-r-2 space-y-3  pr-3"
            style={{ borderColor: "#E6E6E6" }}
          >
            <div className="fw-normal">Duration</div>
            <h4>Weekends/Weekdays</h4>
          </div>
          <div className="space-y-3 pl-3">
            <div className="fw-normal">Nov 10th, 2020</div>
            <h4>Weekends/Weekdays</h4>
          </div>
        </div>
        <div className="flex flex-col pt-5 px-2">
          <h3 className="fw-bolder">{keyInclusions.title}</h3>
          <ul className="flex flex-col space-y-2">
            {keyInclusions.items.map((txt, idx) => {
              return (
                <li key={idx} className="flex flex-row space-x-2">
                  <img className="object-full w-5 h-5" src={roudedTick}></img>
                  <p className="">{txt}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col pt-5 px-2">
          <div className="flex flex-wrap flex-row justify-between">
            <div className="flex flex-wrap flex-col space-y-2">
              <div className="flex flex-wrap flex-row space-x-2">
                <img src={share} className="w-4 h-4 object-contain" />
                <h5>Share</h5>
              </div>
              <div className="flex flex-wrap flex-row space-x-2">
                <img src={globe} className="w-4 h-4 object-contain" />
                <h5>English</h5>
              </div>
            </div>
            <div className="flex flex-wrap flex-col space-y-1">
              <h5>Course Fee</h5>
              <span
                className="text-red-500 fw-bold"
                style={{ fontSize: "20px" }}
              >
                ₹35,000
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap flex-col pt-5 px-2">
          <ButtonPrimary label="Buy Now" />
        </div>
      </div>
      <div className="flex flex-wrap flex-col p-5 mx-15">
        <img src={download} className="object-contain" />
      </div>
    </>
  );
}

export default PlayListBox;

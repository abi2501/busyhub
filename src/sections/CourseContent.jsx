import React from "react";

import download from "./../assets/images/download.png";
import { courseFeatures } from "../constants/constant";

function CourseContent() {
  return (
    <div className="w-3/4 flex flex-wrap flex-col py-5">
      <h1>Course Content</h1>
      {/* <!--------------------------------------------- Section 1 ---------------------------------------------> */}
      <div className="flex flex-col flex-wrap justify-between">
        <div className="flex flex-row pt-5">
          <div className="w-2/4 flex flex-col">
            <p className="text-justify">
              One of a kind course to help you learn skills to be an expert
              Full-stack developer from scratch. Get hands-on training to solve
              real-time problems and technical challenges throughout the testing
              life cycle.
            </p>
          </div>
          <div className="w-1/4 flex flex-col flex-wrap ml-auto">
            <div
              className="p-3 rounded-md"
              style={{ backgroundColor: "#41B98E" }}
            >
              <a className="flex flex-row ">
                <img
                  src={download}
                  className="w-10 h-10  object-contain"
                  style={{ backgroundColor: "#41B98E" }}
                />
                <span className="px-3 py-2 text-white">Download Brochure</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!--------------------------------------------- Section 2 ---------------------------------------------> */}
      <div className="flex flex-wrap flex-col py-10">
        <div className="grid grid-cols-4 gap-5">
          {courseFeatures.map((feature, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col flex-wrap border-1 rounded-sm p-5 space-y-5"
                style={{ borderColor: `${feature.borderClr}` }}
              >
                <p style={{ fontSize: "28px", color: `${feature.borderClr}` }}>
                  {feature.count}
                </p>
                <p>{feature.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CourseContent;

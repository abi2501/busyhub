import React from "react";
import job from "./../assets/images/promo/Group 523.png";
import money from "./../assets/images/promo/Group 524.png";
import career from "./../assets/images/promo/Group 526.png";

const promo = [
  {
    imgsrc: job,
    title: "100% Job Guarantee",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imgsrc: money,
    title: "Money Back Guarantee",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imgsrc: career,
    title: "Career Guideline",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function Promotions() {
  return (
    <div className="flex flex-wrap max-w-screen-xl mx-auto py-3 px-5 border-dashed border-b-2 border-gray-400">
      <div className="flex flex-row justify-center items-center align-items-center ">
        {promo.map((p, idx) => {
          return (
            <div
              key={idx}
              className="mx-auto bg-white overflow-hidden flex space-x-5 justify-between align-items-center"
            >
              {/* Left: Image */}
              <img className="w-30 h-30" src={p.imgsrc} alt="Card" />

              {/* Right: Content */}
              <div className="w-2/3  flex flex-col justify-center">
                <h6 className="fw-bolder" style={{ fontSize: "16px" }}>
                  {p.title}
                </h6>
                <p className="text-gray-600 mt-2" style={{ fontSize: "14px" }}>
                  {p.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Promotions;

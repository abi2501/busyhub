import React from "react";
import info from "./../assets/images/info.png";

function BannerOverlay() {
  return (
    <>
      {/* <!-- Overlay --> */}
      <div className="absolute inset-0 opacity-50 z-10"></div>

      {/* <!-- Content to overlay --> */}
      <div className="absolute inset-0 flex items-center justify-center text-white z-20 right-0 bottom-0 top-55">
        <div className="w-2/4 bg-white p-8  rounded-lg shadow-lg">
          <div className="flex flex-wrap justify-evenly">
            <div className="flex flex-wrap flex-col space-y-2">
              <p>Course Duration</p>
              <div className="flex flex-row justify-between space-x-2">
                <div className="flex flex-wrap flex-row space-x-1">
                  <h4>Weekdays</h4>
                  <img className="w-4 h-4 pt-2 object-contain" src={info} />
                </div>
                <h4>Weekends</h4>
              </div>
            </div>
            <div className="flex flex-wrap flex-col space-y-2">
              <p>Mobile</p>
              <div className="flex flex-row justify-center">
                <h4>Online</h4>
              </div>
            </div>
            <div className="flex flex-wrap flex-col space-y-2">
              <p>First Batch Starting Date</p>
              <div className="flex flex-row justify-center">
                <h4>Nov 10th 2020</h4>
              </div>
            </div>
            <div className="flex flex-wrap flex-col space-y-2">
              <p>Course Fee</p>
              <div className="flex flex-row justify-between">
                <h4 className="text-[#E84B4B]">₹ 58,999</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerOverlay;

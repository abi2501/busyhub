import React from "react";
import SlickSlider from "../components/SlickSlider";
import { hiringCompaniesSrc } from "../constants/constant";

function HiringSlider() {
  return (
    <div className="w-3/4">
      <SlickSlider
        title="Currently Hiring Companies"
        isTitle={true}
        imageSrcList={hiringCompaniesSrc}
        norow={2}
        noslides={3}
      />
    </div>
  );
}

export default HiringSlider;

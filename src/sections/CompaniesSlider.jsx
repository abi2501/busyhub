import React from "react";
import SlickSlider from "../components/SlickSlider";
import { tutorCompaniesSrc } from "../constants/constant";

function CompaniesSlider() {
  return (
    <div className="w-3/4">
      <SlickSlider
        title="Tutor working companies"
        isTitle={true}
        imageSrcList={tutorCompaniesSrc}
        norow={2}
        noslides={3}
      />
    </div>
  );
}

export default CompaniesSlider;

import React from "react";
import SlickSlider from "../components/SlickSlider";
import { techToolsImagesSrc } from "../constants/constant";

function TechSliderBox() {
  return (
    <div className="w-3/4">
      <SlickSlider
        title="Programming  Languages and Tools Covered"
        isTitle={true}
        imageSrcList={techToolsImagesSrc}
      />
    </div>
  );
}

export default TechSliderBox;

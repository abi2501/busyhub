import React from "react";
import CardSlider from "../components/CardSlider";

function SildersContent({ silderData }) {
  return (
    <div className="w-3/4 pt-10">
      <h1>{silderData.title}</h1>
      <CardSlider cardData={silderData} subtitle={silderData.subtitle} />
    </div>
  );
}

export default SildersContent;

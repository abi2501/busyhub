import React from "react";
import calendar from "./../assets/images/calendar.png";
import quote from "./../assets/images/quote.png";

function AvatarCard({ cardData, isQuoted }) {
  return (
    <div className="flex flex-col justify-start shadow-md rounded-md p-10 mx-10">
      <div className="flex flex-row space-x-5 ">
        <div className="rounded">
          <img className="w-15 h-15" src={cardData.imgSrc} />
        </div>
        <div className="flex flex-col justify-center">
          <h2>{cardData.name}</h2>
          <p>{cardData.role}</p>
        </div>
      </div>
      <div className="flex flex-col flex-wrap pt-5">
        <div className="flex flex-col flex-wrap">
          {isQuoted && <img className="w-4 h-4 object-left" src={quote} />}
          <span>{cardData.content}</span>
        </div>
      </div>
      <div className="flex flex-wrap flex-row justify-end pt-10 space-x-2">
        <img className="w-5 h-5 object-contain" src={calendar} />
        <h5 style={{ color: "#0CB3BE" }}>{cardData.date}</h5>
      </div>
    </div>
  );
}

export default AvatarCard;

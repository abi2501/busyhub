import React from "react";
import scope from "./../assets/images/scope.png";

function Scope() {
  return (
    <div className="flex flex-wrap max-w-screen-xl mx-auto">
      <div className="w-2/4 flex flex-col justify-end py-5">
        <h1 className="fw-bolder">
          Scope in the Market or Industry / Market Scope
        </h1>
        <p className="text-justify">
          Almost all the companies are hunting for Full-stack developers, like,
          IBM, Accenture, Wipro, Cognizant, Infosys and many others. A
          full-stack developer's salary seems to vary from company to company
          with an average of Rs. 414K per year.
        </p>
      </div>
      <div className="w-2/4 flex pt-10 justify-end pr-10">
        <img className="object-cover" src={scope} alt="Card" />
      </div>
    </div>
  );
}

export default Scope;

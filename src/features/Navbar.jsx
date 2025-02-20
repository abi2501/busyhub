import React from "react";
import logo from "./../assets/images/Group 359.svg";
import ButtonPrimary from "../components/Button";

function Navbar() {
  return (
    <header className="w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between max-w-screen-xl px-4 mx-auto">
          <img src={logo} />
          <div className="flex flex-wrap">
            <a className="px-3 py-2">Tutor Registration</a>
            <ButtonPrimary label={"Signup"}></ButtonPrimary>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

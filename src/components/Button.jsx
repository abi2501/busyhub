import React from "react";

function ButtonPrimary({ label }) {
  return (
    <button
      className="px-5 py-2 rounded-sm"
      style={{ background: "#F9B233", color: "var(--text-title)" }}
    >
      <h2>{label}</h2>
    </button>
  );
}

export default ButtonPrimary;

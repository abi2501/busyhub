import React from "react";

function ButtonPrimary({ label }) {
  return (
    <button
      className="px-3 py-2 rounded-sm"
      style={{ background: "#F9B233", color: "var(--text-title)" }}
    >
      {label}
    </button>
  );
}

export default ButtonPrimary;

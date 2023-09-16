import React from "react";

export default function Button() {
  return (
    <div className="col-2">
      <button
        type="submit"
        value="Search"
        className="btn btn-primary shadow-sm w-100"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}

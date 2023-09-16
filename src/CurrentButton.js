import React from "react";

export default function CurrentButton() {
  return (
    <div className="col-2">
      <button
        id="current-location"
        type="submit"
        value="Search"
        className="form-control btn btn-primary shadow-sm w-100"
      >
        <i className="fa-solid fa-location-dot"></i>
      </button>
    </div>
  );
}
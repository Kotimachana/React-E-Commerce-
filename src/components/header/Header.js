import React from "react";
import "./header.css";

export default function header() {
  return (
    <div className="container-fluid headertop">
      <div className="container">
      <div className="row  p-1">
        <div className="offset-lg-1 col-lg-2">
          <button className="btn btn-success">OFFER OF THE DAY</button>
        </div>
        <div className="col-lg-4">
          <p className="text-white mt-1">
            Get flat 35% off on orders over $50!
          </p>
        </div>
       
      </div>
    </div>
    </div>
  );
}

import React from "react";
import prodcutdata from "./productdata";
import "./product.css";

export default function Productlist() {
  return (
    <>
      <div className="container-fluid">
        <div className="row p-3 ">
          <h1 className="text-center mt-3 ">Product List</h1>
          {prodcutdata.map((products, ind) => {
            return (
              <div className="card col-md-3 mt-3 mb-3 text-center" key={ind}>
                <img
                  src={products.image}
                  className="card-img-top product-image mx-auto"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{products.title}</h5>
                  <p className="card-text text-justify">${products.price}</p>
                  <a className="btn btn-success text-center">Buy Now</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

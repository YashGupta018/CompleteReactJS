import React from "react";

export default function Product(props) {
  return (
    <div className="row">
      <div className="col-5">
        <h2>
          {props.productList.name}{" "}
          <span class="badge bg-secondary">₹{props.productList.price}</span>{" "}
        </h2>
      </div>
      <div className="col-3">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger">
            -
          </button>
          <button type="button" class="btn btn-warning">
            {props.productList.quantity}
          </button>
          <button type="button" class="btn btn-success">
            +
          </button>
        </div>
      </div>
      <div className="col-4">
          {props.productList.quantity*props.productList.price}
      </div>
    </div>
  );
}

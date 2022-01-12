import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  return props.productList.map((product, i) => {
    return (
      <Product
        productList={product}
        key={i}
        incrementQuantity={props.incrementQuantity}
        index={i}
      />
    );
  });
}

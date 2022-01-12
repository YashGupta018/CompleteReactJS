import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import React, { usesState, useState } from "react";

function App() {
  const productList = [
    {
      price: 24999,
      name: "Samsung",
      quantity: 0,
    },
    {
      price: 44999,
      name: "iPhone",
      quantity: 0,
    },
  ];

  let [producList, setProductList] = useState(productList);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
        />
      </main>
      {/* <Footer/> */}
    </>
  );
}

export default App;

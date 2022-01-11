import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  const productList = [
    {
      price: 24999,
      name: "iPhone SE",
      quantity: 0,
    },
    {
      price: 44999,
      name: "iPhone 11",
      quantity: 0,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList productList={productList} />
      </main>
      {/* <Footer/> */}
    </>
  );
}

export default App;

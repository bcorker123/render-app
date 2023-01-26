import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [productsArr, setProductsArr] = useState([]);

  useEffect(() => {
    fetch("/products")
      .then((r) => r.json())
      .then((data) => setProductsArr(data));
  }, []);

  console.log(productsArr);

  return (
    <div className="App">
      <h1>welcome to d.m., idiot</h1>
      {productsArr.length > 0 ? (
        productsArr.map((product) => {
          return (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <div>{product.quantity} in stock</div>
              <div>${product.price}</div>
              <br></br>
            </div>
          );
        })
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
}

export default App;

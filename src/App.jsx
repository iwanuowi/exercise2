import React, { useState } from "react";
import "./App.css";

const items = [
  { id: 1, name: "T-shirt", price: 20, onSale: true, notForSale: false },
  { id: 2, name: "Jeans", price: 50, onSale: false, notForSale: true },
  { id: 3, name: "Socks", price: 5, onSale: true, notForSale: false },
  { id: 4, name: "Hat", price: 15, onSale: false, notForSale: true },
  { id: 5, name: "Shoes", price: 65, onSale: true, notForSale: false },
];

function App() {
  const [showSaleOnly, setShowSaleOnly] = useState(false);

  const filteredItems = showSaleOnly
    ? items.filter((item) => item.onSale)
    : items;

  return (
    <div>
      <h1 className="fw-bold">Shopping Cart</h1>
      <button
        className="btn border border-2 border-primary bg-primary fw-bold text-white mb-2"
        onClick={() => setShowSaleOnly(!showSaleOnly)}
      >
        {showSaleOnly ? "Show All sale" : "Show Sale Only"}
      </button>
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="border border-3 border-black mb-1 rounded d-flex justify-content-center align-items-center p-3"
        >
          <p className="fw-bold text-black mb-0">{item.name}</p>
          <p
            className="fw-bold d-flex justify-content-center mb-0 ms-1 rounded p-1 "
            style={{
              color: item.onSale ? "white" : "white",
              backgroundColor: item.onSale ? "green" : "red",
            }}
          >
            {item.onSale ? "On Sale" : "Not For Sale"}
          </p>

          <span className="fw-bold ms-3">${item.price}</span>
        </div>
      ))}
    </div>
  );
}

export default App;

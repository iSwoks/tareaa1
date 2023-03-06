import React from "react";

function ItemListContainer(props) {
  return (
    <div style={{ backgroundColor: "#eee", padding: "20px" }}>
      <h1 style={{ color: "#333" }}>{props.greeting}</h1>
      <p style={{ fontSize: "18px" }}>
        Aquí encontrarás una gran variedad de productos.
      </p>
    </div>
  );
}

export default ItemListContainer;

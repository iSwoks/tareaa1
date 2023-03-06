import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/productos">Productos</a>
        </li>
        <li>
          <a href="/carrito">
            <CartWidget />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

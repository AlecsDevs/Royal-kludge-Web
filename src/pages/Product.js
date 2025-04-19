import React from "react";

import img from "../assets/RKK65.png";
import "../style/Product.css";

const Product = () => {
  return (
    <div className="Product">
      <div className="container">
        <h1 className="Brand">RK65</h1>
        <h2 className="Brand-container">FEATURES</h2>
        <ul>
          <li>Compact 66-key 65% TKL Layout</li>
          <li>Gasket Structure.</li>
          <li>Four-Layered Sound-Absorbing Design</li>
          <li>RGB Backlit</li>
          <li>Wired Only</li>
          <li>Hotswap PCB</li>
          <li>Aluminium Volume Knob</li>
          <li>PBT MDA profile Keycaps</li>
          <li> Factory lubed RK Chartreuse Linear Switch</li>
        </ul>
      </div>
      <a
        href="https://ecommerce.datablitz.com.ph/cdn/shop/files/Royal-Kludge-R65-greensand-main.jpg?v=1704769054"
        target="_blank"
      >
        <img src={img} alt="" className="parallelogram" />
      </a>
      <br />
    </div>
  );
};

export default Product;

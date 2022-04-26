import React from "react";

import Brands from "../Brand/brands";
import { Mainst } from "../Brand/BrandStyle";
import Product from "../Product/Product";

function Main() {
  return (
    <div>
      <Mainst>New Arrivals</Mainst>
      <Product />
      <Brands />
    </div>
  );
}

export default Main;

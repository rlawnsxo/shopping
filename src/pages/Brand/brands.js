import React from "react";
import BrandsList from "./BrandsList";
import { BrandsSt, Title, Add, MainBrand } from "./BrandStyle";

let test = [1, 2, 3, 4];
const Brands = () => {
  return (
    <BrandsSt>
      <Title>
        Brands<Add>더보기 +</Add>
      </Title>
      <BrandsList />
    </BrandsSt>
  );
};

export default Brands;

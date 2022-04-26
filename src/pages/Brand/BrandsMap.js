import React from "react";
import { BrandList, BrandImg } from "./BrandStyle";

const BrandsMap = ({ item, index }) => {
  return (
    <BrandList key={index}>
      <BrandImg src={item.src} />
    </BrandList>
  );
};

export default BrandsMap;

import React from "react";
import BrandsMap from "./BrandsMap";
import { OutList } from "./BrandStyle";

const BrandsList1 = [
  {
    id: 1,
    src: "img/ami.png",
    name: "ami",
  },
  {
    id: 2,
    src: "img/casio.png",
    name: "casio",
  },
  {
    id: 3,
    src: "img/SalvatoreFerragamo.png",
    name: "Salvatore Ferragamo",
  },
];

const BrandsList = () => {
  let start = Date.now();
  const millis = Date.now() - start;
  console.log(millis);
  return (
    <OutList>
      {BrandsList1.map((item, index) => {
        return <BrandsMap item={item} key={index} />;
      })}
    </OutList>
  );
};

export default BrandsList;

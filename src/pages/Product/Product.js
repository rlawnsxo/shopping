import React from "react";
import ProductMap from "./ProductMap";
import { List } from "./productStryle";

const productList = [
  {
    id: 1,
    brand: "Salvatore Ferragamo",
    name: "아모 페가rkdh 빼fm 레이 - EDP 100ML",
    price: "154,000",
    src: "img/Ferragamo.png",
  },
  {
    id: 2,
    brand: "ami",
    name: "AMI 미니하트 반팔 BFFJ109 723 001",
    price: "153,200",
    src: "img/BFFJ.png",
  },
  {
    id: 3,
    brand: "Salvatore Ferragamo",
    name: "Ferragamo gancini necklace",
    price: "150,470",
    src: "img/necklace.png",
  },
  {
    id: 4,
    brand: "Salvatore Ferragamo",
    name: "Ferragamo low cut sneakers",
    price: "890,000",
    src: "img/sneakers.png",
  },
  {
    id: 5,
    brand: "Salvatore Ferragamo",
    name: "아모 페가rkdh 빼fm 레이 - EDP 100ML",
    price: "154,000",
    src: "img/Ferragamo.png",
  },
  {
    id: 6,
    brand: "ami",
    name: "AMI 미니하트 반팔 BFFJ109 723 001",
    price: "153,200",
    src: "img/BFFJ.png",
  },
  {
    id: 7,
    brand: "Salvatore Ferragamo",
    name: "Ferragamo gancini necklace",
    price: "150,470",
    src: "img/necklace.png",
  },
  {
    id: 8,
    brand: "Salvatore Ferragamo",
    name: "Ferragamo low cut sneakers",
    price: "890,000",
    src: "img/sneakers.png",
  },
];

const product = () => {
  return (
    <List>
      {productList.map((item, index) => {
        return <ProductMap item={item} key={index} url={"/detail"} />;
      })}
    </List>
  );
};

export default product;

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ImgBox,
  Brand,
  Name,
  Price,
  MapList,
  HoverEvent,
} from "./productStryle";

const ProductMap = ({ item, index, url }) => {
  let navigate = useNavigate();

  const gePage = (item, e) => {
    e.preventDefault();
    navigate(url, { state: item });
  };
  return (
    <MapList
      key={index}
      onClick={(e) => {
        gePage(item, e);
      }}
    >
      <HoverEvent>
        <ImgBox src={item.src} />
        <Brand>{item.brand}</Brand>
        <Name>{item.name}</Name>
        <Price>{item.price}원</Price>
      </HoverEvent>
    </MapList>
  );
};

export default ProductMap;

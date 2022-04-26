import React from "react";
import { useLocation } from "react-router-dom";
import {
  MainOneTool,
  Left,
  Right,
  FlexBox,
  ProductName,
  ProductPrice,
  ColWidth,
  Sand,
  GetOutLine,
  GetBtn,
  MainTowTool,
  DivLine,
  Log,
  Fee,
  Point,
} from "./DetailStyle";

const Detail = () => {
  // const [detail, setDetail] = useState(null);
  const location = useLocation();
  let priaceAvg = Number(location.state.price.replace(/,/g, "") * 0.1);
  let priceString = String(priaceAvg).replace(
    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
    ","
  );

  return (
    <>
      <MainOneTool>
        <Left>
          <img src={location.state.src} />
        </Left>
        <Right>
          <FlexBox>
            <Log src="img/ami.png" />
            <h3> {location.state.brand} </h3>
          </FlexBox>
          <hr />
          <ProductName>{location.state.name}</ProductName>
          <ProductPrice>{location.state.price}원</ProductPrice>
          <hr />
          <FlexBox>
            <Point>적립포인트</Point>
            <Point>{priceString}KSP</Point>
          </FlexBox>
          <Sand>
            <Point>배송비</Point>
            <Point>5000원</Point>
          </Sand>
          <FlexBox>
            <ColWidth />
            <Fee>제주/도서산간 지연은 추가 배송비가 있을 수 있습니다.</Fee>
          </FlexBox>
          <GetOutLine>
            <GetBtn>바로구매</GetBtn>
          </GetOutLine>
        </Right>
      </MainOneTool>
      <MainTowTool>
        <DivLine></DivLine>
        <p style={{ paddingLeft: 15 }}>상품 상세정보</p>
      </MainTowTool>
    </>
  );
};

export default Detail;

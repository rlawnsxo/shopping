import styled from "styled-components";

export const List = styled.div`
  width: 980px;
  margin: 32px auto;
  cursor: pointer;
  place-items: center;
  display: flex;
  flex-wrap: wrap;
`;

export const MapList = styled.div`
  margin: 0 auto;
  flex: initial;
  width: 200px;
`;

export const ImgBox = styled.img`
  width: 200px;
  height: 230px;
`;
export const Brand = styled.p`
  margin-top: 3px;
  text-align: left;
  font-size: 12px;
  font-weight: 200;
  margin-bottom: 5px;
`;
export const Name = styled.p`
  width: 200px;
`;
export const Price = styled.div`
  width: 200px;
`;
export const HoverEvent = styled.div`
  &:hover {
    opacity: 0.5;
  }
  width: 33%;
`;

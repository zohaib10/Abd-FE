import { Button } from "atom/Button";
import styled from "styled-components";

export const ItemCardContainer = styled.section`
  height: 450px;
  border-radius: 10px;
  width: 250px;
  background: #fff;
  position: relative;

  img {
    height: 300px;
    width: 250px;
  }
`;

export const Price = styled.p`
  margin: 0;
  position: absolute;
  font-size: 12px;
  top: 10px;
  left: 10px;
  color: #222;
  &:hover {
    cursor: pointer;
  }
`;

export const CartButton = styled(Button)`
  margin: 0;
  position: absolute;
  font-size: 14px;
  top: 10px;
  right: 10px;
  color: #222;
  width: 32px;
  height: 26px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px #888888;

  svg {
    fill: #222;
    margin: 8px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Clickable = styled.section`
  &:hover {
    cursor: pointer;
  }
`;

export const Text = styled.section`
  padding: 10px;
  h4 {
    margin: 0;
    color: #3f7cac;
  }
  p {
    margin: 6px 0;
    font-size: 12px;
  }
`;

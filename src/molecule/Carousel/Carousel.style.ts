import { Button } from "atom/Button";
import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-grow: 5;
  button {
    width: 60px;
    &:hover {
      cursor: pointer;
    }
  }
  svg {
    width: 60px;
    fill: #fff;
  }
`;

export const LeftButton = styled(Button)`
  position: absolute;
  top: 50%;
`;
export const RightButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 50%;
`;

export const Image = styled.img`
  height: 600px;
  //   width: 100%;
`;

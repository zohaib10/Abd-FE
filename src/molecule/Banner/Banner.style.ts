import { Input } from "atom/Input";
import styled from "styled-components";

export const BannerContainer = styled.section`
  background: #222;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  font-size: 14px;
  color: #fff;
  height: 44px;

  button {
    font-size: 14px;
  }

  p {
    margin: 0;
  }
`;

export const Left = styled.section`
  display: flex;

  button {
    &:hover {
      cursor: pointer;
    }
  }
  svg {
    width: 24px;
    height: 14px;
    stroke: #fff;
  }
`;

export const BannerInput = styled(Input)`
  margin: 10px 0;
  outline: none;
`;

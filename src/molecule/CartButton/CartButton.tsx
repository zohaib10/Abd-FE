import styled from "styled-components";
import { Basket } from "icons";

const StyledCartButton = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  position: relative;
  svg {
    margin-right: 10px;
  }
  span {
    position: absolute;
    top: 14px;
    right: 6px;
    font-size: 8px;
    border: 1px solid red;
    border-radius: 50%;
    padding: 1px 3px;
    color: #fff;
    background: red;
  }
`;

type CartButtonProps = {
  count: number;
};

export const CartButton = ({ count }: CartButtonProps) => {
  return (
    <StyledCartButton>
      {count && <span>{count}</span>}
      <Basket />
      {/* <p>Cart ({count})</p> */}
    </StyledCartButton>
  );
};

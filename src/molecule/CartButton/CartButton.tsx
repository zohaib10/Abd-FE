import styled from "styled-components";
import { Cart } from "icons";

const StyledCartButton = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  svg {
    margin-right: 10px;
  }
`;

type CartButtonProps = {
  count: number;
};

export const CartButton = ({ count }: CartButtonProps) => {
  return (
    <StyledCartButton>
      <Cart />
      <p>Cart ({count})</p>
    </StyledCartButton>
  );
};

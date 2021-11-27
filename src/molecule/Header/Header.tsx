import React from "react";

import { CartButton } from "molecule/CartButton";

import { HeaderContainer } from "./Header.style";

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>Rooh</h1>
      <CartButton count={1} />
    </HeaderContainer>
  );
};

import React, { useState } from "react";
import { Button } from "atom/Button";
import { BannerContainer, Left, BannerInput } from "./Banner.style";
import { Search } from "icons";
import { Input } from "atom/Input";

export const Banner = () => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <BannerContainer>
      <p>Special offer: 25% off all Kurtas this Eid-ul-fitar</p>
      <Left>
        {isSearching && <BannerInput />}
        <Button variation="clear" onClick={() => setIsSearching((c) => !c)}>
          <Search />
        </Button>
        <Button variation="clear">Login</Button>
      </Left>
    </BannerContainer>
  );
};

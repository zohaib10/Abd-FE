import React from "react";
import {
  ItemCardContainer,
  Price,
  CartButton,
  Clickable,
  Text,
} from "./ItemCard.style";

import clothesImage from "img/clothes1.png";
import { Cart } from "icons";

type Item = {
  itemId: string;
  name: string;
  type: "clothing" | "shoes" | "accessories";
  gender: "mens" | "womens" | "unisex";
  images: Record<string, string>;
  description: string;
  colors: string[];
  price: string;
};

export const ItemCard = () => {
  const handleItemClick = () => {
    console.log("Item clicked");
  };

  const handleAddToCart = () => {
    console.log("Add to Cart Clicked");
  };

  return (
    <ItemCardContainer>
      <CartButton onClick={handleAddToCart} variation="primary">
        <Cart />
      </CartButton>
      <Clickable onClick={handleItemClick}>
        <Price>$22.99</Price>
        <img alt="idk" src={clothesImage} />
        <Text>
          <h4>Qamar</h4>
          <p>
            Green kurta woven with the finest silk that Wanhar has to offer.
            Delicately Hand stitched neck line.
          </p>
        </Text>
      </Clickable>
    </ItemCardContainer>
  );
};

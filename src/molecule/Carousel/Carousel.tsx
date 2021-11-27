import React from "react";

import { Left, Right } from "icons";
import { Container, Image, LeftButton, RightButton } from "./Carousel.style";

import bgImage from "img/image.jpeg";

export const Carousel = () => {
  const handleLeftClick = () => {
    console.log("Left Clicked");
  };
  const handleRightClick = () => {
    console.log("Right Clicked");
  };

  return (
    <Container>
      <LeftButton variation="clear" onClick={handleLeftClick}>
        <Left />
      </LeftButton>
      <Image src={bgImage} />
      <RightButton variation="clear" onClick={handleRightClick}>
        <Right />
      </RightButton>
    </Container>
  );
};

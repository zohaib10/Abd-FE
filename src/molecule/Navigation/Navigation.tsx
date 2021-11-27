import { useState } from "react";

// Molecule
import { Right } from "icons";

// Atom
import { Button } from "atom/Button";

// Style
import { NavigationContainer, Desktop } from "./Navigation.style";

// Icons
import { Down, Hamburger } from "icons";

// Hooks
import { useMedia } from "hooks";

//Components
import { Mobile } from "./Mobile";

export const Navigation = () => {
  const { screenMatches: isDesktop } = useMedia("(min-width: 768px)");
  const [expandMobile, setExpandMobile] = useState(false);

  return (
    <NavigationContainer>
      <Button variation="menu_item">
        <>
          <h4>Home</h4> <Right />
        </>
      </Button>
      <Button variation="menu_item">
        <>
          <h4>Mens</h4> <Right />
        </>
      </Button>
      <Button variation="menu_item">
        <>
          <h4>Womens</h4> <Right />
        </>
      </Button>
    </NavigationContainer>
  );
};

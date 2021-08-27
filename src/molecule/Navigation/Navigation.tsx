import { useState } from "react";

// Molecule
import { CartButton } from "molecule/CartButton";

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

  const handleHamburgerClick = () => setExpandMobile(!expandMobile);

  return (
    <NavigationContainer>
      {isDesktop ? (
        <Desktop>
          <Button variation="menu_item">Home</Button>
          <Button variation="menu_item">
            <>
              Men <Down />
            </>
          </Button>
        </Desktop>
      ) : (
        <Button onClick={handleHamburgerClick} variation="menu_item">
          <Hamburger />
        </Button>
      )}
      <CartButton count={0} />
    </NavigationContainer>
  );
};

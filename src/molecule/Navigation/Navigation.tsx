import { Fragment } from "react";

// Icon
import { Right } from "icons";

// Atom
import { Button } from "atom/Button";

// Style
import { NavigationContainer } from "./Navigation.style";

//Component
import { ChildNavigation } from "./ChildNavigation";

//Constants
import { NavigationLinks } from "./NavigationConstants";

export const Navigation = () => {
  const handleNavigationClick = (link?: string) => {
    console.log(`Navigate to ${link}`);
  };

  return (
    <NavigationContainer>
      {NavigationLinks.map((l, i) => (
        <Fragment key={i}>
          {!!l.children ? (
            <ChildNavigation
              childLinks={l}
              handleNavigationClick={handleNavigationClick}
            />
          ) : (
            <Button
              onClick={() => handleNavigationClick(l.link)}
              variation="menu_item"
              key={i}
            >
              <>
                <h4>{l.name}</h4> <Right />
              </>
            </Button>
          )}
        </Fragment>
      ))}
    </NavigationContainer>
  );
};

import { useState } from "react";

import { Button } from "atom/Button";
import { Down, Right } from "icons";

import { ChildLinks } from "./Navigation.style";
import { Links } from "./NavigationTypes";

type ChildNavigationProps = {
  childLinks: Links;
  handleNavigationClick: (l?: string) => void;
};

export const ChildNavigation = ({
  childLinks,
  handleNavigationClick,
}: ChildNavigationProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ChildLinks>
      <Button variation="menu_item" onClick={handleExpandClick}>
        <>
          <h4>{childLinks.name}</h4> {expanded ? <Down /> : <Right />}
        </>
      </Button>

      {expanded &&
        childLinks?.children?.map((l, i) => (
          <Button
            onClick={() => handleNavigationClick(l.link)}
            variation="menu_item"
            key={i}
          >
            <>
              <h4>{l.name}</h4> <Right />
            </>
          </Button>
        ))}
    </ChildLinks>
  );
};

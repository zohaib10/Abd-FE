import { Landing } from "components/Landing";

import { CartButton } from "molecule/CartButton";
import { Navigation } from "molecule/Navigation/Navigation";

import { GlobalStyle } from "styles/globalStyles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navigation />
      <Landing />
    </div>
  );
}

export default App;

import { Landing } from "components/Landing";
import { CartButton } from "molecule/CartButton";
import { GlobalStyle } from "styles/globalStyles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <CartButton count={0} />
      <Landing />
    </div>
  );
}

export default App;

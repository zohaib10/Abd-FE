import { Landing } from "components/Landing";
import { Carousel } from "molecule/Carousel";

import { CartButton } from "molecule/CartButton";
import { Header } from "molecule/Header/Header";
import { Navigation } from "molecule/Navigation/Navigation";
import styled from "styled-components";

import { GlobalStyle } from "styles/globalStyles";

const Row = styled.section`
  display: flex;
  justify-content: space-between;

  > section:first-child {
    margin-right: 10px;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Row>
        <Navigation />
        <Carousel />
      </Row>
    </div>
  );
}

export default App;

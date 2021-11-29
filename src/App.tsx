import { Landing } from "components/Landing";
import { Banner } from "molecule/Banner";
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

const AppContainer = styled.section`
  @media (min-width: 768px) {
    padding: 0 30px;
  }
`;

function Shell() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Row>
        <Navigation />
        <Carousel />
      </Row>
    </AppContainer>
  );
}

const App = () => (
  <div>
    <Banner />
    <Shell />
  </div>
);

export default App;

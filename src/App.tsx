import { Banner } from "molecule/Banner";
import { Carousel } from "molecule/Carousel";

import { Header } from "molecule/Header/Header";
import { ItemCard } from "molecule/ItemCard";
import { Navigation } from "molecule/Navigation/Navigation";
import styled from "styled-components";

import { GlobalStyle } from "styles/globalStyles";

const Row = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  > section:first-child {
    margin-right: 10px;
  }
`;

const AppContainer = styled.section`
  @media (min-width: 768px) {
    padding: 0 40px;
  }
`;

const ItemRow = styled(Row)`
  // padding: 10px 50px;
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
      <ItemRow>
        {[0, 1, 2, 3, 4].map((i) => (
          <ItemCard />
        ))}
      </ItemRow>
      <ItemRow>
        {[0, 1, 2, 3, 4].map((i) => (
          <ItemCard />
        ))}
      </ItemRow>
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

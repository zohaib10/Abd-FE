import styled from "styled-components";

export const NavigationContainer = styled.section`
  padding: 18px;
  display: flex;
  flex-grow: 1;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  color: #fff;

  button {
    border-bottom: 1px solid #222;
    color: #222;
    display: flex;
    justify-content: space-between;

    &:hover {
      opacity: 0.6;
      cursor: pointer;
    }
  }
`;

export const Desktop = styled.div`
  display: flex;
  button {
    margin-right: 16px;
  }
`;

import styled from "styled-components";

export const NavigationContainer = styled.section`
  padding: 18px;
  display: flex;
  flex-grow: 1;
  min-width: 250px;
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
    margin-right: 18px;
  }
`;

export const ChildLinks = styled.section`
  width: 100%;
  button:not(:first-child) {
    h4 {
      padding-left: 12px;
    }
  }
`;

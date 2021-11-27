import styled from "styled-components";

const StyledIcon = styled.svg`
  width: 14px;
  fill: #222;
  margin: auto 0;
`;

export const Left = () => (
  <StyledIcon viewBox="0 0 24 24">
    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
  </StyledIcon>
);

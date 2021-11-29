import styled from "styled-components";

const StyledIcon = styled.svg`
  width: 14px;
  fill: #222;
  margin: auto 0;
`;

export const Down = () => {
  return (
    <StyledIcon viewBox="0 0 24 24">
      <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
    </StyledIcon>
  );
};

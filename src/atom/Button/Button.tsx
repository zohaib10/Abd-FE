import React from "react";
import styled, { css } from "styled-components";

type ButtonVariation = "primary" | "link" | "menu_item";
type ButtonSize = "sm" | "md";

const smallButton = css`
  max-width: 113px;
  min-height: 44px;
`;

const menuItem = css`
  color: #fff;
  background: inherit;
`;

const ButtonStyled = styled.button<{
  variation: ButtonVariation;
  size: ButtonSize;
}>`
  max-width: 164px;
  min-height: 46px;
  color: #fff;
  padding: 8px 16px;
  background: #f25c54;
  font-size: 16px;
  border: none;
  display: flex;
  align-items: center;

  svg {
    margin: 0 10px 0 6px;
  }

  ${(props) => props.size === "sm" && smallButton}
  ${(props) => props.variation === "menu_item" && menuItem}
`;

type ButtonProps = {
  children?: React.ReactChild;
  variation: ButtonVariation;
  size?: ButtonSize;
  icon?: any;
};

export const Button = ({
  children,
  variation = "primary",
  size = "md",
  icon,
  ...rest
}: ButtonProps & React.HTMLAttributes<HTMLButtonElement>) => (
  <ButtonStyled {...rest} size={size} variation={variation}>
    {children}
  </ButtonStyled>
);

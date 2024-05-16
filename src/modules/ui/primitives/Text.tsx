import { type HTMLStyledProps, styled } from "@styled-system/jsx";

export interface TextProps extends HTMLStyledProps<"text"> {}

export const Text = ({ children, ...rest }: TextProps) => (
  <styled.text {...rest}>{children}</styled.text>
);

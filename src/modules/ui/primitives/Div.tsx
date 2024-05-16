import { type HTMLStyledProps, styled } from "@styled-system/jsx";

export interface DivProps extends HTMLStyledProps<"div"> {}

export const Div = ({ children, ...rest }: DivProps) => (
  <styled.div {...rest}>{children}</styled.div>
);

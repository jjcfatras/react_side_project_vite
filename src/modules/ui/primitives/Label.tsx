import { type HTMLStyledProps, styled } from "@styled-system/jsx";

export interface LabelProps extends HTMLStyledProps<"label"> {}

export const Label = ({ children, ...rest }: LabelProps) => (
  <styled.label {...rest}>{children}</styled.label>
);

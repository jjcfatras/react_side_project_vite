import { type HTMLStyledProps, styled } from "@styled-system/jsx";

export interface SelectProps extends HTMLStyledProps<"select"> {}

export const Select = ({ children, ...rest }: SelectProps) => (
  <styled.select {...rest}>{children}</styled.select>
);

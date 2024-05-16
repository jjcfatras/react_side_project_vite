import { type HTMLStyledProps, styled } from "@styled-system/jsx";

export interface OptionProps extends HTMLStyledProps<"option"> {}

export const Option = ({ children, ...rest }: OptionProps) => (
  <styled.option {...rest}>{children}</styled.option>
);

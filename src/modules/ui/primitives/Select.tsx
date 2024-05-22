import { type HTMLStyledProps, styled } from "@styled-system/jsx";
import { forwardRef, type Ref } from "react";

export interface SelectProps extends HTMLStyledProps<"select"> {}

export const Select = forwardRef(
  ({ children, ...rest }: SelectProps, ref: Ref<HTMLSelectElement>) => (
    <styled.select ref={ref} {...rest}>
      {children}
    </styled.select>
  ),
);

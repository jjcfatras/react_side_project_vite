import { type Ref, forwardRef } from "react";

import { type HTMLStyledProps, styled } from "@styled-system/jsx";

export interface SelectProps extends HTMLStyledProps<"select"> {}

export const Select = forwardRef(
  ({ children, ...rest }: SelectProps, ref: Ref<HTMLSelectElement>) => (
    <styled.select ref={ref} {...rest}>
      {children}
    </styled.select>
  ),
);

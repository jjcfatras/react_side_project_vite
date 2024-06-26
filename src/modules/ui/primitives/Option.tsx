import { type Ref, forwardRef } from "react";

import { type HTMLStyledProps, styled } from "@styled-system/jsx";

export interface OptionProps extends HTMLStyledProps<"option"> {}

export const Option = forwardRef(
  ({ children, ...rest }: OptionProps, ref: Ref<HTMLOptionElement>) => (
    <styled.option ref={ref} {...rest}>
      {children}
    </styled.option>
  ),
);

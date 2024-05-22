import { type HTMLStyledProps, styled } from "@styled-system/jsx";
import { forwardRef, type Ref } from "react";

export interface OptionProps extends HTMLStyledProps<"option"> {}

export const Option = forwardRef(
  ({ children, ...rest }: OptionProps, ref: Ref<HTMLOptionElement>) => (
    <styled.option ref={ref} {...rest}>
      {children}
    </styled.option>
  ),
);

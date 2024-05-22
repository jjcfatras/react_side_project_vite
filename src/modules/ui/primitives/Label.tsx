import { type HTMLStyledProps, styled } from "@styled-system/jsx";
import { forwardRef, type Ref } from "react";

export interface LabelProps extends HTMLStyledProps<"label"> {}

export const Label = forwardRef(
  ({ children, ...rest }: LabelProps, ref: Ref<HTMLLabelElement>) => (
    <styled.label ref={ref} {...rest}>
      {children}
    </styled.label>
  ),
);

import { type HTMLStyledProps, styled } from "@styled-system/jsx";
import { forwardRef, type Ref } from "react";

export interface DivProps extends HTMLStyledProps<"div"> {}

export const Div = forwardRef(
  ({ children, ...rest }: DivProps, ref: Ref<HTMLDivElement>) => (
    <styled.div ref={ref} {...rest}>
      {children}
    </styled.div>
  ),
);

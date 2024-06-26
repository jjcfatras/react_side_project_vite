import { type Ref, forwardRef } from "react";

import { type HTMLStyledProps, styled } from "@styled-system/jsx";

export interface DivProps extends HTMLStyledProps<"div"> {}

export const Div = forwardRef(
  ({ children, ...rest }: DivProps, ref: Ref<HTMLDivElement>) => (
    <styled.div ref={ref} {...rest}>
      {children}
    </styled.div>
  ),
);

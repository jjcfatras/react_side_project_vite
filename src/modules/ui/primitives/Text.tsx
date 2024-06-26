import { type Ref, forwardRef } from "react";

import { type HTMLStyledProps, styled } from "@styled-system/jsx";

export interface TextProps extends HTMLStyledProps<"text"> {}

export const Text = forwardRef(
  ({ children, ...rest }: TextProps, ref: Ref<SVGTextElement>) => (
    <styled.text ref={ref} {...rest}>
      {children}
    </styled.text>
  ),
);

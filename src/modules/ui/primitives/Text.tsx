import { type HTMLStyledProps, styled } from "@styled-system/jsx";
import { forwardRef, type Ref } from "react";

export interface TextProps extends HTMLStyledProps<"text"> {}

export const Text = forwardRef(
  ({ children, ...rest }: TextProps, ref: Ref<SVGTextElement>) => (
    <styled.text ref={ref} {...rest}>
      {children}
    </styled.text>
  ),
);

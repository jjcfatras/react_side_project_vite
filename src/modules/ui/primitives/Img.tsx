import { type Ref, forwardRef } from "react";

import { type HTMLStyledProps, styled } from "@styled-system/jsx";

export interface ImgProps extends HTMLStyledProps<"img"> {}

export const Img = forwardRef(
  ({ children, ...rest }: ImgProps, ref: Ref<HTMLImageElement>) => (
    <styled.img ref={ref} {...rest}>
      {children}
    </styled.img>
  ),
);

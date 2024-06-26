import { type Ref, forwardRef } from "react";

import { type HTMLStyledProps, styled } from "@styled-system/jsx";

export interface FormProps extends HTMLStyledProps<"form"> {}

export const Form = forwardRef(
  ({ children, ...rest }: FormProps, ref: Ref<HTMLFormElement>) => (
    <styled.form ref={ref} {...rest}>
      {children}
    </styled.form>
  ),
);

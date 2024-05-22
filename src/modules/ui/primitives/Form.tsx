import { type HTMLStyledProps, styled } from "@styled-system/jsx";
import { forwardRef, type Ref } from "react";

export interface FormProps extends HTMLStyledProps<"form"> {}

export const Form = forwardRef(
  ({ children, ...rest }: FormProps, ref: Ref<HTMLFormElement>) => (
    <styled.form ref={ref} {...rest}>
      {children}
    </styled.form>
  ),
);

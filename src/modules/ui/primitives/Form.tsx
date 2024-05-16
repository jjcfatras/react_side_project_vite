import { type HTMLStyledProps, styled } from "@styled-system/jsx";

export interface FormProps extends HTMLStyledProps<"form"> {}

export const Form = ({ children, ...rest }: FormProps) => (
  <styled.form {...rest}>{children}</styled.form>
);

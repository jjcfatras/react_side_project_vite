import { Div, type DivProps } from "./primitives";

export interface GridProps extends Omit<DivProps, "display"> {}

export const Grid = ({ children, ...rest }: GridProps) => (
  <Div display="grid" gridTemplateColumns="3" gap="10px" {...rest}>
    {children}
  </Div>
);

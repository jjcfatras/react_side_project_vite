import { type DivProps, Div } from "./primitives";

export interface GridProps extends Omit<DivProps, "display"> {}

export const Grid = ({ children, ...rest }: GridProps) => (
  <Div display="grid" gap="10px" gridTemplateColumns="3" {...rest}>
    {children}
  </Div>
);

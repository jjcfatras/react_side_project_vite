import { Div, Img, Text } from "./primitives";

interface CardProps {
  imgUrl: null | string;
  title: string | undefined;
}

export const Card = ({ imgUrl, title }: CardProps) => (
  <Div
    borderColor={{ _hover: "blue", base: "red" }}
    borderWidth="thin"
    height="300px"
    placeSelf="center"
    width="300px"
  >
    <Text fontSize="s" fontWeight="bold">
      {title}
    </Text>
    {imgUrl && <Img src={imgUrl} />}
  </Div>
);

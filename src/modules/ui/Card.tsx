import type { IArticle } from "@modules/news";

import { Div, Text } from "./primitives";

export const Card = ({ title }: { title: IArticle["title"] }) => (
  <Div
    aspectRatio="landscape"
    borderColor={{ base: "red", _hover: "blue" }}
    borderWidth="thin"
    width="300px"
    borderRadius="md"
    placeSelf="center"
  >
    <Text fontSize="s" fontWeight="bold">
      {title}
    </Text>
  </Div>
);

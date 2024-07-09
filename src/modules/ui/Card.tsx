import type { IArticle } from "@modules/news";

import { Div, Text } from "./primitives";

export const Card = ({ title }: { title: IArticle["title"] }) => (
  <Div
    aspectRatio="landscape"
    borderColor={{ base: "red", _hover: "blue" }}
    borderRadius="md"
    borderWidth="thin"
    placeSelf="center"
    width="300px"
  >
    <Text fontSize="s" fontWeight="bold">
      {title}
    </Text>
  </Div>
);

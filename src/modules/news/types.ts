export interface IArticle {
  author: string;
  content: null | string;
  description: null | string;
  publishedAt: string;
  source: {
    id: null | string;
    name: string;
  };
  title: string | undefined;
  url: string;
  urlToImage: null | string;
}

export interface INewsResponse {
  articles: IArticle[];
  status: "error" | "ok";
  totalResults: number;
}

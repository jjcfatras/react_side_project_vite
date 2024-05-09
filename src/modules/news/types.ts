export interface IArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string | undefined;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface INewsResponse {
  status: "ok" | "error";
  totalResults: number;
  articles: IArticle[];
}

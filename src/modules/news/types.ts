export interface ArticleType {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface NewsResponseType {
  status: "ok" | "error";
  totalResults: number;
  articles: ArticleType[];
}

export interface TopNewsByCountryNameRespnse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: Date;
  content: string | null;
}

export interface Source {
  id: string;
  name: string;
}

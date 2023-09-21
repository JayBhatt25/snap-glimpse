type NewsArticleData = {
    author: string | null;
    title: string;
    description: string;
    url: string;
    image: string | null;
    category: string;
    language: string;
    country: string;
    published_at:string;
}

type Pagination = {
   limit: number;
   offset: number;
   count: number;
   total: number;
}

type NewsResponse = {
    pagination: Pagination;
    data: NewsArticleData[];
}

type Category = "general"|
"business" |
"entertainment"|
"health" |
"science" |
"sports"|
"technology";
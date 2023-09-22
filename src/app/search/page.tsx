import FetchNews from "../../../lib/FetchNews";
import NewsList from '../NewsList'

type Props = {
    searchParams?: {keyword: string}
}

async function SearchPage({searchParams}: Props) {

    const news: NewsResponse = await FetchNews(
        "general",
        searchParams?.keyword,
        true
    );
  return (
    <div>
        <h1 className="headerTitle">Search Results for: {searchParams?.keyword}</h1>
        <NewsList news={news} />
    </div>
  )
}

export default SearchPage;
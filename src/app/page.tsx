import { categories } from "../../constants"
import FetchNews from "../../lib/FetchNews";
import NewsList from "./NewsList";
import response from "../../response.json"

export default async function Home() {

  const news: NewsResponse =  response  || (await FetchNews(categories.join(',')));
  
  return (
    <main>
      <NewsList news={news} />
    </main>
  )
}

import { categories } from "../../constants"
import FetchNews from "../../lib/FetchNews";


export default async function Home() {

  const news: NewsResponse = await FetchNews(categories.join(','));
  //  console.log(news)
  return (
    <main className="">
      Homepage
    </main>
  )
}

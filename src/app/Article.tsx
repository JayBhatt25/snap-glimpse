import React from 'react'
import ReadMoreButton from './ReadMoreButton'
import LiveTimeStamp from './LiveTimeStamp'

type Props  = {
    article: NewsArticleData
}

function Article({article}: Props) {
  return <article className="bg-slate-100 dark:bg-slate-800 flex flex-col
     round-lg shadow-sm hover:scale-105 hover:shadow-lg justify-between
     hover:bg-slate-200 w-2/3 my-3 mx-auto transition-all duration-200 ease-out">
        {article.image && (
            <img
                src={article.image}
                alt={article.title}
                className="h-56 w-full object-cover rounded-t-lg shadow-md"
            />
        )}

        <div className="flex-1 flex flex-col">
            <div className="flex-1 flex flex-col p-5">
                <h2 className="font-bold font-serif">{article.title}</h2>
                <section className="mt-2 flex-1">
                    <p className="text-xs line-clamp-2">{article.description}</p>
                </section>
                <footer className="text-xs text-right ml-auto flex
                 space-x-1 pt-5 italic text-gray-400">
                    <p>{article.source}</p>
                    <p>
                        <LiveTimeStamp time={article.published_at} />
                    </p>
                </footer>
            </div>
            <ReadMoreButton article={article} />
        </div>
    </article>
}

export default Article
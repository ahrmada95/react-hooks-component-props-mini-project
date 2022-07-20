import React from "react";
import Article from "./Article";

const ArticleList = ({posts}) => {
    console.log(posts);
    return (
        <main>
            {posts.map((article) => 
                <Article key={article.id} title={article.title} date={article.date} preview={article.preview} time={article.minutes}/>
            )}
        </main>
    )
}

export default ArticleList;
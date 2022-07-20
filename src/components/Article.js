import React from "react";
import MinToRead from "./MinToRead"

const Article = ({title, date="January 1, 1970", preview, time}) => {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} {<MinToRead time={time}/>}{time}min read</small>
            <p>{preview}</p>
        </article>   
    )
}

export default Article;
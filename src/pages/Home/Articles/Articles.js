import React, { useEffect, useState } from 'react';
import Article from '../Article/Article';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('https://quiet-ridge-68466.herokuapp.com/articles')
        .then(res=>res.json())
        .then(data=>setArticles(data))
    })
    return (
        <div id="articles" className="container mx-auto px-8 my-6">
            <h2 className="text-3xl font-bold text-gray-900 my-4">Articles</h2>
            <div className="grid gap-4 grid-cols-3">
                {
                    articles.map(article=><Article
                    key={article._id}
                    article={article}
                    ></Article>)
                }
            </div>
        </div>
    );
};

export default Articles;
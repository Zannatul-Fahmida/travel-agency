import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetails = () => {
    const { articlesId } = useParams();
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch(`https://quiet-ridge-68466.herokuapp.com/articles/${articlesId}`)
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [articlesId]);
    return (
        <div className="flex flex-col items-center px-20 my-4">
            <img className="md:w-1/2" src={articles.img} alt="" />
            <h3 className="text-5xl font-bold my-4">{articles.title}</h3>
            <div className="flex justify-between w-full">
                <p>{articles.info}</p>
                <p>{articles.category}</p>
            </div>
            <div className="flex justify-between w-full items-center mb-2">
                <p>{articles.location}</p>
                <p>{articles.expense}</p>
            </div>
            <p>{articles.description}</p>
        </div>
    );
};

export default ArticleDetails;
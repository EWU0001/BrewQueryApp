//https://newsapi.org/v2/everything?&q=beer&pageSize=5&apiKey=2a86ca5163dc4a2ab710596417da00de

import { useState, useEffect } from "react";
import "./styling/BeerNews.css";

export function BeerNews() {
    const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await fetch(
                `https://newsapi.org/v2/everything?q=beer&pageSize=5&sortBy=popularity&apiKey=${API_KEY}`
            );
            const data = await response.json();
            setNews(data.articles);
        };
        fetchNews();
    },);

    return (
        <div id="scroll-container">
            <h3>Top Beer News</h3>
            <div id="scroll-text">
                {news && news.length > 0 ? (news.map((article, index) => (
                    <div className={`article-title-${index}`} key={index}>
                        {article.title}
                    </div>
                ))
                ) : (<div>Read too much News today....</div>
                )}
            </div>
        </div>
    );
}

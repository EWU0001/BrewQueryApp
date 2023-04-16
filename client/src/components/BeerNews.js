import { useState, useEffect } from "react";
import "./styling/BeerNews.css";

export function BeerNews() {
    const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await fetch(
                `https://newsapi.org/v2/everything?q=beer&pageSize=4&sortBy=popularity&apiKey=${API_KEY}`
            );
            const data = await response.json();
            setNews(data.articles);
        };
        fetchNews();
    },);

    return (
        <div id="news-container">
            {news && news.length > 0 ? (
                news.map((article, index) => (
                    <div className={`carousel-image-${index}`} key={index}>
                        <div className="carousel-item">
                            <div className="card">
                                <div className="card-image">
                                    <img src={article.urlToImage} alt={article.title} />
                                </div>
                                <div className="card-title">{article.title}</div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (<div className="card-title">Read too much News today....</div>
            )}

        </div>
    );
}

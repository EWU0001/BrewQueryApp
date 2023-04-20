import { useState, useEffect } from "react";
import "./styling/BeerNews.css";
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';

export function BeerNews() {
    const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchNews() {
            try {
                const response = await fetch(
                    `https://newsapi.org/v2/everything?q=brewery&pageSize=4&sortBy=relevancy&apiKey=${API_KEY}`
                );
                if (!response.ok) {
                    throw new Error(`Failed to fetch news: ${response.status}`);
                }
                const data = await response.json();
                setNews(data.articles);
            } catch (error) {
                setError(error);
                setNews([]);
            }
        }
        fetchNews();
    }, [API_KEY]);

    return (
        <div className="news-container">
            <h3 className="news-title">Top Brew News</h3>
            {error ? (
                <Typography variant="h5" component="h2" color="error">
                    Error: {error.message}
                </Typography>
            ) : (
                <>
                    {news && news.length > 0 ? (
                        <Grid container spacing={2} >
                            {news.map((article, index) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                    <Card sx={{ maxHeight: 400 }} className="cards" background-color="transparent">
                                        <CardMedia
                                            id="card-image"
                                            component="img"
                                            height="280"
                                            image={article.urlToImage}
                                            alt={article.title}
                                            onClick={() => window.open(article.url, '_blank')}
                                            sx={{ cursor: 'pointer' }}
                                            to={article.url}
                                        />
                                        <CardContent className="card-content" >
                                            <Typography
                                                gutterBottom variant="h6"
                                                component="h2"
                                                className="card-text"
                                            >
                                                <span>{article.title}</span>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    ) : (
                        <Typography variant="h5" component="h2">
                            Read too much News today....
                        </Typography>
                    )}
                </>
            )}
        </div>
    );
}

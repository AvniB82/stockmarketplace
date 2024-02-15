import { useEffect, useState } from 'react';
import fetchNews from '../utils/newsapi';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const StockNews = (stock) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    if (!stock) return;
    const getNews = async () => {
      const data = await fetchNews(stock.stock['1. symbol']);
      setNews(data);
    };
    getNews();
  }, [stock]);
  if (news) console.log(news);
  // news object:
  // article_photo_url
  // article_title
  // article_url
  // post_time_utc
  // source
  return (
    <div style={{ margin: '20px' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        {news &&
          news.map((article, index) => (
            <Card
              key={index}
              style={{
                width: '20%',
                marginBottom: '20px',
                marginLeft: '5px',
                marginRight: '5px',
              }}
            >
              <Card.Img
                variant='top'
                src={article.article_photo_url}
                style={{ height: '40%', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: '16px' }}>
                  {article.article_title}
                </Card.Title>
                <Card.Text style={{ fontSize: '12px' }}>
                  {article.post_time_utc}
                </Card.Text>
                <Card.Text style={{ fontSize: '12px' }}>
                  {article.source}
                </Card.Text>
                <Button variant='primary' size='sm' href={article.article_url}>
                  Read more
                </Button>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default StockNews;

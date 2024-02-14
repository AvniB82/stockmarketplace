import { useEffect, useState } from "react"
import fetchNews from "../utils/newsapi"
import 'bootstrap/dist/css/bootstrap.css'
import Card from 'react-bootstrap/Card'
import Button  from 'react-bootstrap/button'





const StockNews = (stock) => {
    const [news, setNews] = useState([])
    useEffect(() => {
        if (!stock) return
        const getNews = async () => {
            const data = await fetchNews(stock.stock['1. symbol'])
            setNews(data)
        }
        getNews()
    }, [stock])
    if (news) console.log(news)
    // news object:
    // article_photo_url
    // article_title
    // article_url
    // post_time_utc
    // source
    return (
        <div>
            
            

            {news && news.map(article => 
            (

            
                        <Card style={{width: "18rem"}}>
                    <Card.Img variant="top" src={article.article_photo_url}/>
                    <Card.Body>
                        <Card.Title>{article.article_title}</Card.Title>
                        <Card.Text>{article.post_time_utc}</Card.Text>
                        <Card.Text>{article.source}</Card.Text>
                        <Button variant="primary" href={article.article_url}>Read more</Button>
                    </Card.Body>
            </Card>)
                  
            )}
        
        </div>
    )
}

export default StockNews;
import { Button, Col, Container, Row } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import './cards.css'
import defaultImg from './spLogo.png'
const Cards = () => {
    const [user, setUser] = useState([])

    const getNews = async () => {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=0db882bc8cd7457da69b0ef3cde83788')
        const data = await response.json();
        setUser(await data.articles)
    }
    useEffect(() => {
        getNews();
    }, [])
    
   


    return (
        <>
            <Container>
                <Row>
                    {
                        user.map((curNews) => {   
                                
                            return (
                                <>
                                    
                                    <Col md = '4'>
                                        <Card className="card d-flex justify-content-center" style={{ width: '25rem' }}>
                                            <Card.Img variant="top" onError={(e)=>{e.target.onerror = null; e.target.src={defaultImg}}} src={curNews.urlToImage} />
                                            <Card.Body>
                                                <Card.Title>{curNews.title}</Card.Title>
                                                <Card.Text>
                                                    {curNews.content}
                                                </Card.Text>
                                                <Button href = {curNews.url} variant="primary">READ MORE</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                </>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default Cards

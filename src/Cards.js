import { Button, Container, Row } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import './cards.css'

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
                                    <div className="d-flex justify-content-center">

                                        <Card className="card" style={{ width: '35rem' }}>
                                            <Card.Img src={curNews.urlToImage} onError={(e) => { e.target.onerror = null; e.target.src = "./spLogo.png" }} />
                                            <Card.Body>
                                                <Card.Title>{curNews.title}</Card.Title>
                                                <Card.Text>
                                                    {curNews.content}
                                                </Card.Text>
                                                <Button href={curNews.url} variant="primary">READ MORE</Button>
                                            </Card.Body>
                                        </Card>

                                    </div>
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

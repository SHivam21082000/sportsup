import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const navbar = () => {
    return (
        <>
                <Navbar variant="dark" bg="dark">
                    <Container>
                        <Navbar.Brand href="#">SPORTS-UP</Navbar.Brand>
                    </Container>
                </Navbar>
        </>
    )
}

export default navbar

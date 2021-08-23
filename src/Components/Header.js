import React from 'react'
import { Navbar, Nav,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Nav className="me-auto menu">
                    <Link to='/' className="nav-link">Home</Link>
                    <Link to='/about' className="nav-link">About</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header

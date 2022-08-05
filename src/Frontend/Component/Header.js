import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/"><img src="img/logo.png"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#Services">Services</Nav.Link>
                <Nav.Link href="#AboutUs">About Us</Nav.Link>
                <Nav.Link href="#ContactUs">Contact Us</Nav.Link>
                <Nav.Link href="/products">Pricing</Nav.Link>
                <Nav.Link href="/signup">  <Button variant="primary sign-button">Sign Up</Button>{' '}</Nav.Link>
                <Nav.Link href="/sign">  <Button variant="primary sign-button">Sign In</Button>{' '}</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

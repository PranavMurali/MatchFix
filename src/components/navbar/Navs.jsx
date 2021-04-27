import React from 'react'
import {Navbar,Nav, NavDropdown, Form, FormControl,Button} from "react-bootstrap"
import "./styles.css"
const Navs = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home" className="title"><h3>MatchFix</h3></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/" className="navlink">Home</Nav.Link>
        <Nav.Link href="/" className="navlink">Guest register</Nav.Link>
        <Nav.Link href="/signup" className="navlink">Signup</Nav.Link>
        <NavDropdown title="Facilities" id="basic-nav-dropdown" style={{textDecoration:"none",color:"white"}}>
            <NavDropdown.Item href="#action/3.1">Football</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Basketball</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Hockey</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    )
}

export default Navs



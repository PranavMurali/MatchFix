import React from 'react'
import {Navbar,Nav, NavDropdown, Form, FormControl,Button} from "react-bootstrap"
import "./styles.css"
const Navs = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="/" className="title"><h3>MatchFix</h3></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/" className="navlink">Home</Nav.Link>
        <Nav.Link href="/guest" className="navlink">Guest register</Nav.Link>
        <Nav.Link href="/signup" className="navlink">Signup</Nav.Link>
        <NavDropdown title="Facilities" id="basic-nav-dropdown" style={{textDecoration:"none",color:"white"}}>
            <NavDropdown.Item href="/football">Football</NavDropdown.Item>
            <NavDropdown.Item href="/basketball">Basketball</NavDropdown.Item>
            <NavDropdown.Item href="/cricket">Cricket</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/more">More</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/user" className="navlink" >User</Nav.Link>
            </Nav.Item>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    )
}

export default Navs



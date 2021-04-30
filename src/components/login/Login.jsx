import React from 'react'
import { Button, Form,Row,Col} from 'react-bootstrap'
import {Link} from "react-router-dom"; 
import "./styles.css"
const Login = () => {
    return (
        <Form className="form">
        <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
            Email
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
            Password
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
            </Col>
        </Form.Group>
        <Button variant="success" className="butt">
            <Link to="/home" style={{textDecoration: "none",color:"white" }}>Login</Link>
        </Button>
        <Button variant="dark" className="butt">
            <Link to="/guest" style={{textDecoration: "none",color:"white"}}>Don't want to Login?</Link>
        </Button>
        <Button  className="butt">
            <Link to="/login" style={{textDecoration: "none",color:"white" }}>Need an account? Signup</Link>
        </Button>
        
            
        
        </Form>
    )
}

export default Login

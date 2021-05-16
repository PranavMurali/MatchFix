import React, { useState } from 'react'
import { Button, Form,Row,Col} from 'react-bootstrap'
import {Link, useHistory} from "react-router-dom"; 
import { auth } from '../../firebase';
import "./styles.css"
const Login = () => {
    const history =useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = event=>{
        event.preventDefault();
        auth
        .signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/');
        })
        .catch((e)=>alert(e.message));
        alert("You've Logged in.")
    }


    return (
        <div className="App" style={{ position: 'relative', overflow: "hidden" ,width:"100%",height:"100%"}}>
        <Form className="form">
        <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
            Email
            </Form.Label>
            <Col sm={10}>
            <Form.Control value ={email} onChange={event=>setEmail(event.target.value)} type="email" placeholder="Email" />
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
            Password
            </Form.Label>
            <Col sm={10}>
            <Form.Control value ={password} onChange={event=>setPassword(event.target.value)} type="password" placeholder="Password" />
            </Col>
        </Form.Group>

        <Button variant="success" className="butt">
            <Link onClick={login} style={{textDecoration: "none",color:"white" }}>Login</Link>
        </Button>
        <Button  className="butt">
            <Link to="/signup" style={{textDecoration: "none",color:"white" }}>Need an account? Signup</Link>
        </Button>
        </Form>
        </div>
    )
}

export default Login

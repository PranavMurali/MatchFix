import React from 'react'
import { Button, Form} from 'react-bootstrap'
const Login = () => {
    return (
        <Form className="form">
        <Form.Group controlId="formBasicEmail">
        <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" isInvalid="true" />
        </Form.Group>
        </Form.Group>
        <Form.Group>
        <Form.Label htmlFor="inputPassword6">Password</Form.Label>
        <Form.Control
            type="password"
            className="mx-sm-3"
            id="inputPassword6"
            aria-describedby="passwordHelpInline"
        />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Login
        </Button>
        </Form>
    )
}

export default Login

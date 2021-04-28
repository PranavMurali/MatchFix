import {React} from 'react'
import { Button, Form, Col,Jumbotron,Container} from 'react-bootstrap'
import './styles.css'
import {Link} from "react-router-dom"; 

const Sigform = () => {
    return (
        <>
        <Jumbotron fluid className="jumbotron">
        <Container>
            <h1>Signup</h1>
            <p>
            This is signup.
            </p>
        </Container>
        </Jumbotron>

        <Form className="t">
    <Form.Group controlId="formBasicEmail">
        <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Row>
            <Col>
                <Form.Control placeholder="First name" />
            </Col>
            <Col>
                <Form.Control placeholder="Last name" />
            </Col>
            </Form.Row>
        </Form.Group>
        
        <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" isInvalid="true" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>Register Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Register Number" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
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
    <Form.Text id="passwordHelpInline" muted>
        Must be 8-20 characters long.
    </Form.Text>
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
    </Form.Group>
    <Button variant="primary" type="submit">
        Signup
    </Button>

    <Button className="buttwht">
    <Link to="/" style={{textDecoration: "none",color:"white" }}>Register as a Guest</Link>
    </Button>
    
    </Form>
    </>
    )
}

export default Sigform

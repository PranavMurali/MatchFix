import {React ,useState} from 'react'
import { Button, Form, Col,Jumbotron,Container} from 'react-bootstrap'
import './styles.css'
import {Link, useHistory} from "react-router-dom"; 
import { auth } from '../../firebase';

const Sigform = () => {
    const history =useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const register = event=>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/');
        })
        .catch((e)=>alert(e.message));
    }


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

        <Form className="form">
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
            <Form.Control onChange={event=>setEmail(event.target.value)} type="email" placeholder="Enter email" isInvalid="true" />
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
        id="inputPassword6"
        aria-describedby="passwordHelpInline"
        onChange={event=>setPassword(event.target.value)}
    />
    <Form.Text id="passwordHelpInline" muted>
        Must be 8-20 characters long.
    </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
    </Form.Group>

    <Button variant="success" className="butt">
        <Link onClick={register} to="/home" style={{textDecoration: "none",color:"white" }}>Signup</Link>
    </Button>
    <Button variant="dark" className="butt">
        <Link to="/guest" style={{textDecoration: "none",color:"white"}}>Don't want to Signup?</Link>
    </Button>
    <Button  className="butt">
        <Link to="/login" style={{textDecoration: "none",color:"white" }}>Have an account?  Login</Link>
    </Button>
    </Form>
    </>
    )
}

export default Sigform

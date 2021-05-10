import {React,useState} from 'react'
import { Button, Form, Col,Jumbotron,Container,Dropdown,DropdownButton} from 'react-bootstrap'
import './styles.css'
import {Link} from "react-router-dom"; 
import {useStateValue} from "../../StateProvider";
import {firebase} from "../../firebase"
const RegUserform = () => {
    const [sport,setSport] =useState('');
    const [email, setEmail] = useState('');
    const [slot,setSlot] =useState('');
    const [regno, setRegno] = useState('');
    const [players, setPlayers] = useState('');

    const createSlot = (e) =>{
        e.preventDefault();
        const slotRef =firebase.database().ref("Slots");
        const slots ={
            slot,
            sport,
            regno,
            email,
            done: false,
            players,
        };
        slotRef.push(slots);
        console.log(slots)
    }

    return (
        <>
            <Jumbotron fluid className="jumbo_reg">
            <Container>
                <h1>Book your slots</h1>
                <p>
                This is your Booking area.
                </p>
            </Container>
            </Jumbotron>

            <Form className="form" onSubmit={createSlot} >
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
                <Form.Control value={email} onChange={event=>setEmail(event.target.value)} type="email" placeholder="Enter email" isInvalid="true" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Register Number</Form.Label>
                <Form.Control value={regno} onChange={event=>setRegno(event.target.value)} type="text" placeholder="Enter Register Number" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Number of players</Form.Label>
                <Form.Control value={regno} onChange={event=>setRegno(event.target.value)} type="text" placeholder="Enter Number of players" />
            </Form.Group>
            
        </Form.Group>

        <DropdownButton id="dropdown-basic-button" variant="info" title="Sport">
        <Dropdown.Item onClick={()=>{setSport("Football")}}>Football</Dropdown.Item>
        <Dropdown.Item onClick={()=>{setSport("Basketball")}}>Basketball</Dropdown.Item>
        <Dropdown.Item onClick={()=>{setSport("Cricket")}}>Cricket</Dropdown.Item>
        <Dropdown.Item onClick={()=>{setSport("Chess")}}>Chess</Dropdown.Item>
        <Dropdown.Item onClick={()=>{setSport("Table Tennis")}}>Table Tennis</Dropdown.Item>
        <Dropdown.Item onClick={()=>{setSport("Tennis")}}>Tennis</Dropdown.Item>
        <Dropdown.Item onClick={()=>{setSport("Volleyball")}}>Volleyball</Dropdown.Item>
        <Dropdown.Item onClick={()=>{setSport("Badminton")}}>Badminton</Dropdown.Item>
        </DropdownButton>

        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Allot to any field" />
        </Form.Group>
        
        <Button variant="dark" type="submit" onClick={createSlot}>
            Book Slot
        </Button>
        <Button variant="success" className="butt">
            <Link to="/signup" style={{textDecoration: "none",color:"white" }}>Signup</Link>
        </Button>
        <Button  className="butt">
            <Link to="/login" style={{textDecoration: "none",color:"white" }}>Have an account?  Login</Link>
        </Button>
        </Form>

    

        </>
    )
}

export default RegUserform

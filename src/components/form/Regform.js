import {React, useState} from 'react'
import { Button, Form, Col,Jumbotron,Container,Dropdown,DropdownButton} from 'react-bootstrap'
import './styles.css'
import TimeKeeper from 'react-timekeeper';
import {Link} from "react-router-dom"; 
const Regform = () => {
    const [startTime, setStartTime] = useState('12:34pm')
    const [showStartTime, setShowStartTime] = useState(true)
    const [endTime, setEndTime] = useState('1:40pm')
    const [showEndTime, setShowEndTime] = useState(true)

    const handleStartTime = () =>{
        setShowStartTime(false)
        alert(`Slot starts at ${startTime}`)
    } 

    const handleEndTime = () =>{
        setShowEndTime(false)
        alert(`Slot ends at ${endTime}`)
    } 

    return (
        <>
        <Jumbotron fluid className="jumbo_reg">
        <Container>
            <h1>Guest registration</h1>
            <p>
            This is guest reg.
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
    <DropdownButton id="dropdown-basic-button" variant="info" title="Sport">
    <Dropdown.Item href="#/action-1">Football</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Basketball</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Table Tennis</Dropdown.Item>
    </DropdownButton>
    <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Allot to any field" />
    </Form.Group>
    <div>
    <div className="row">
        <div className="col-md-4">
            <Form.Group controlId="dob">
                <Form.Label>Select Date</Form.Label>
                <Form.Control type="date" name="dos" placeholder="Date of Slot" />
            </Form.Group>
        </div>
    </div>
    </div>

    <div>
            {showStartTime &&
                <TimeKeeper
                    time={startTime}
                    onChange={(newTime) => setStartTime(newTime.formatted12)}
                    onDoneClick={() => handleStartTime()}
                    switchToMinuteOnHourSelect
                />
            }
            <span>Slot starts at {startTime}</span>
            {!showStartTime &&
                <button onClick={() => setShowStartTime(true)}>Show</button>
            }
    </div>

    <div>
            {showEndTime &&
                <TimeKeeper
                    time={endTime}
                    onChange={(newTime) => setEndTime(newTime.formatted12)}
                    onDoneClick={() => handleEndTime()}
                    switchToMinuteOnHourSelect
                />
            }
            <span>Slot ends at {endTime}</span>
            {!showEndTime && 
                <button onClick={() => {setShowEndTime(true)}}>Show</button>
            }
    </div>
    
    <Button variant="dark" type="submit">
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

export default Regform

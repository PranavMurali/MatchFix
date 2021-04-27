import {React, useState} from 'react'
import { Button, Form, Col} from 'react-bootstrap'
import './styles.css'
import TimeKeeper from 'react-timekeeper';
const Regform = () => {
    const [startTime, setStartTime] = useState('12:34pm')
    const [showStartTime, setShowStartTime] = useState(true)

    const [endTime, setEndTime] = useState('1:40pm')
    const [showEndTime, setShowEndTime] = useState(true)
    return (
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
    <div>
    <div className="row">
        <div className="col-md-4">
            <Form.Group controlId="dob">
                <Form.Label>Select Date</Form.Label>
                <Form.Control type="date" name="dob" placeholder="Date of Birth" />
            </Form.Group>
        </div>
    </div>
    </div>

    <div>
            {showStartTime &&
                <TimeKeeper
                    time={startTime}
                    onChange={(newTime) => setStartTime(newTime.formatted12)}
                    onDoneClick={() => setShowStartTime(false)}
                    switchToMinuteOnHourSelect
                />
            }
            <span>Chosen slot Begins at {startTime}</span>
            {!showStartTime &&
                <button onClick={() => setShowStartTime(true)}>Show</button>
            }
    </div>

    <div>
            {showEndTime &&
                <TimeKeeper
                    time={endTime}
                    onChange={(newTime) => setEndTime(newTime.formatted12)}
                    onDoneClick={() => setShowEndTime(false)}
                    switchToMinuteOnHourSelect
                />
            }
            <span>Chosen slot End at {endTime}</span>
            {!showEndTime &&
                <button onClick={() => setShowEndTime(true)}>Show</button>
            }
    </div>

    <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>
    )
}

export default Regform

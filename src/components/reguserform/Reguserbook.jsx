import React from 'react'
import { Form, Row,Col } from 'react-bootstrap';
import {useStateValue} from "../../StateProvider";
import "./styles.css"
const Reguserbook = () => {
    const[{user,sport,fields},dispatch] = useStateValue();
    return (
    <Form className="bookform">
    <Form.Group as={Row} type="text">
        <Form.Label column sm="2">
        Sport
        </Form.Label>
        <Col sm="10">
        <Form.Control plaintext readOnly defaultValue={sport} />
        </Col>
    </Form.Group>
    <Form.Group controlId="exampleForm.SelectCustomSizeSm">
    <Form.Label>{sport==="More games" ? "sports":"Field"}</Form.Label>
    <Form.Control as="select" size="sm" custom>
        <option>{sport==="More games" ? "Table Tennis":fields[0]}</option>
        <option>{sport==="More games" ? "Chess":fields[1]}</option>
        <option>{sport==="More games" ? "Hockey":null}</option>
        </Form.Control>
    </Form.Group>
    </Form>
    )
}

export default Reguserbook

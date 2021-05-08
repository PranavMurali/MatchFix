import React from 'react'
import {useStateValue} from "../../StateProvider"
import {Jumbotron,Container,Table,Card} from "react-bootstrap"
import "./styles.css"
const Profile = () => {
    const[{user},] = useStateValue();
    return (
        <>
        <Jumbotron fluid className="jumboprof">
        <Container>
            <h1>Hey! {user?.email}</h1>
            <p>
            Welcome to your profile!
            </p>
        </Container>
        </Jumbotron>
        <div className="tables">
        <Card style={{ width: '100rem' }}>
        <Card.Body>
            <Card.Title>Booking History</Card.Title>
            <Card.Text>
                <Table striped bordered hover variant="dark" responsive>
                <thead>
                <tr>
                    <th>No.</th>
                    <th>Date</th>
                    <th>Sport</th>
                    <th>Time Slot</th>
                    <th>Number of players</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>1/5/21</td>
                    <td>Football</td>
                    <td>3:30-4:30</td>
                    <td>10</td>
                </tr>
                <tr>
                <td>1</td>
                    <td>2/5/21</td>
                    <td>Cricket</td>
                    <td>3:30-4:30</td>
                    <td>22</td>
                </tr>
                </tbody>
                </Table>
            </Card.Text>
        </Card.Body>
        </Card>
        </div>
        
    </>
    )
}

export default Profile

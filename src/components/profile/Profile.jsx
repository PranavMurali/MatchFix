import {React,useState,useEffect} from 'react'
import {useStateValue} from "../../StateProvider"
import {Jumbotron,Container,Table,Card} from "react-bootstrap"
import "./styles.css"
import {db} from "../../firebase"
const Profile = () => {
    const[{user},] = useStateValue();
    const[sd,setSd]= useState([]);

    useEffect(() => {
        fetchSlots();
    }, [])
    
    const fetchSlots = async ()=>{
        const sds=await db.collection("Booking").doc("Slots").get()
        setSd(sds.data().slotlist)
        console.log(sds.data().slotlist)
        
    }
    
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
                    <th>Email</th>
                    <th>Register Number</th>
                    <th>Sport</th>
                    <th>Number of players</th>
                </tr>
                </thead>
                <tbody>
                {sd.length &&
                sd.map((data,i)=>(
                    <tr>
                        <td>{i+1}</td>
                        <td>{data.email}</td>
                        <td>{data.regno}</td>
                        <td>{data.sport}</td>
                        <td>{data.players}</td>
                    </tr>
                ))}
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

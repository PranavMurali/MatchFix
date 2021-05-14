import {React,useState,useEffect} from 'react'
import {useStateValue} from "../../StateProvider"
import {Jumbotron,Container,Table,Card} from "react-bootstrap"
import "./styles.css"
import {db} from "../../firebase"
import {auth} from "../../firebase"
const Profile = () => {
    const[{user},] = useStateValue();
    const[sd,setSd]= useState([]);

    useEffect(() => {
        fetchSlots();
    }, [])
    
    const fetchSlots = async ()=>{
        const sds=await db.collection("Booking").doc("Slots").get()
        setSd(sds.data().slotlist)        
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
                    <th>Booking ID</th>
                    <th>Sport</th>
                    <th>Number of players</th>
                    <th>Slot</th>
                </tr>
                </thead>
                <tbody>
                {sd.length &&
                
                sd
                .filter(s => s.email === user?.email)
                .map((data,i)=>(
                    <tr>
                        <td>{i+1}</td>
                        <td>{data.id}</td>
                        <td>{data.sport}</td>
                        <td>{data.players}</td>
                        <td>{data.slots}</td>
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

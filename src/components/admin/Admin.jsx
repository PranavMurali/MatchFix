import {React,useState,useEffect} from 'react'
import { useStateValue } from "../../StateProvider";
import {Jumbotron,Container,Table,Card} from "react-bootstrap"
import danger from "./img/danger.png"
import "./styles.css"
import {db} from "../../firebase"
const Admin = () => {
    const[{user},dispatch]=useStateValue();
    const[sd,setSd]= useState([]);
        
    useEffect(() => {
        fetchSlots();
    }, [])
    
    const fetchSlots = async ()=>{
        const sds=await db.collection("Booking").doc("Slots").get()
        setSd(sds.data().slotlist)
        console.log(sds.data().slotlist)
        
    }
    if (user?.email==="pranavmurali2001@gmail.com") {
        return(
            <>
            <Jumbotron fluid className="jumboprof">
            <Container>
                <h1>Hey! {user?.email}</h1>
                <p>
                Welcome To The Admin Portal.
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
                        <th>Regno</th>
                        <th>Email ID</th>
                        <th>Sport</th>
                        <th>Number of players</th>
                        <th>Need Equipment</th>
                    </tr>
                    </thead>
                    <tbody>
                    {sd.length &&
                    sd
                    .map((data,i)=>(
                        <tr>
                            <td>{i+1}</td>
                            <td>{data.id}</td>
                            <td>{data.regno}</td>
                            <td>{data.email}</td>
                            <td>{data.sport}</td>
                            <td>{data.players}</td>
                            <td>{data.equip}</td>
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
    else {
        return(
            <div >
                <img className="danger" src={danger}/>
            </div>
        )
    }
}

export default Admin
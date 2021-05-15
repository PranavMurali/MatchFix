import {React,useState,useEffect} from 'react'
import { useStateValue } from "../../StateProvider";
import {Jumbotron,Container,Table,Card,Form,Button} from "react-bootstrap"
import "./styles.css"
import {db} from "../../firebase"

const Allslots = ({sd, id}) => {
    return(
        <>
        {sd.length &&
                    sd
                    .map((data,i)=>(
                        <tr>
                            <td>{i+1}</td>
                            <td>{data.id}</td>
                            <td>{data.dates}</td>
                            <td>{data.sport}</td>
                            <td>{data.players}</td>
                            <td>{data.slots}</td>
                            <td>{data.equip}</td>
                            <td>{data.addp}</td>
                        </tr>
        ))}
        </>
    )
}

const Filteredslots = ({sd, metric, id}) => {
    const[{user}]=useStateValue("");
    return(
        <>
        {sd.length &&
                    sd
                    .filter(s => s[metric] === id && s.email===user?.email)
                    .map((data,i)=>(
                        <tr>
                            <td>{i+1}</td>
                            <td>{data.id}</td>
                            <td>{data.dates}</td>
                            <td>{data.sport}</td>
                            <td>{data.players}</td>
                            <td>{data.slots}</td>
                            <td>{data.equip}</td>
                            <td>{data.addp}</td>
                            
                        </tr>
        ))}
        </>
    )
}
const Profile = () => {
    const[{user}]=useStateValue("");
    const[sd,setSd]= useState([]);
    const[metric,setMetric]=useState("");
    const[id,setId]=useState("");
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
            <Form>
            <Form.Label>Enter Filter Metric</Form.Label>
                <Form.Control onChange={(e)=>{setMetric(e.target.value)}} required  as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                    <option >Choose a filter..</option>
                    <option value="sport">Sport</option>
                    <option value="equip">Equipment Need</option>
                    <option value="addp">Other players allowed</option>
                    <option value="slot">Slot</option>
                    <option value="dates">Date</option>
                </Form.Control>
                <Form.Group>
                    <Form.Label>Enter Filter Id</Form.Label>
                    <Form.Control required onChange={event=>setId(event.target.value)} type="text" placeholder="Enter filter id" />
                </Form.Group>
                <Button variant="warning" onClick={()=>{setMetric("")}} >
                    Reset Filters
                </Button>
            </Form>
            <br/>
            <Card style={{ width: '100rem' }}>
            <Card.Body>
                <Card.Title>Booking History</Card.Title>
                <Card.Text>
                    <Table striped bordered hover variant="dark" responsive>
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>Booking ID</th>
                        <th>Date</th>
                        <th>Sport</th>
                        <th>Number of players</th>
                        <th>Slot</th>
                        <th>Need Equipment</th>
                        <th>Allow other players</th>
                    </tr>
                    </thead>
                    <tbody>
                    {metric? <Filteredslots sd={sd} metric={metric} id={id}/> : <Allslots sd={sd} id={id}/>}
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

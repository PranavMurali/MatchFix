import {React,useState} from 'react'
import { Button, Form, Col,Jumbotron,Container} from 'react-bootstrap'
import './styles.css'
import {useStateValue} from "../../StateProvider"
import {Link} from "react-router-dom"; 
import {db} from "../../firebase"
const RegUserform = () => {
    const[{user},] = useStateValue();
    const [sport,setSport] =useState('');
    const [slot,setSlot] =useState('');
    const [regno, setRegno] = useState('');
    const [players, setPlayers] = useState('');
    const [validated, setValidated] = useState(false);
    const createSlot = async (e)=>{
        e.preventDefault();
        const id= Math.floor(Math.random()*1000000);
        const email=user?.email;
        const slot={sport,players,regno,email,id}
        let hist;
        hist=await db.collection("Booking").doc("Slots").get()
        hist = hist.data()
        let slotlist = hist.slotlist
        slotlist.push(slot)
        
        //let slotlist=[]
        //slotlist.push(slot)
        db.collection("Booking").doc("Slots").set({
            slotlist
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
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
                    <Form.Control required placeholder="First name" />
                </Col>
                <Col>
                    <Form.Control required placeholder="Last name" />
                </Col>
                </Form.Row>
            </Form.Group>
        
            <Form.Group>
                <Form.Label>Register Number</Form.Label>
                <Form.Control required onChange={event=>setRegno(event.target.value)} type="text" placeholder="Enter Register Number" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Number of players</Form.Label>
                <Form.Control required onChange={event=>setPlayers(event.target.value)} type="number" placeholder="Enter Number of players" />
            </Form.Group>
            
        </Form.Group>

        <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
        Choose Sport
        </Form.Label>
        <Form.Control onChange={(e)=>{setSport(e.target.value)}} required  as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
            <option >Choose..</option>
            <option value="Football">Football</option>
            <option value="Basketball">Basketball</option>
            <option value="Cricket">Cricket</option>
            <option value="Chess">Chess</option>
            <option value="Table Tennis">Table Tennis</option>
            <option value="Tennis">Tennis</option>
            <option value="Volleyball">Volleyball</option>
            <option value="Badminton">Badminton</option>
        </Form.Control>

        <Form.Group controlId="formBasicCheckbox">
            <Form.Check required type="checkbox" label="I confirm my booking." />
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

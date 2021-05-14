import {React,useState,useEffect} from 'react'
import { Button, Form, Col,Jumbotron,Container,Toast} from 'react-bootstrap'
import './styles.css'
import {useStateValue} from "../../StateProvider"
import {Link} from "react-router-dom"; 
import {db} from "../../firebase"
import DatePicker from 'react-date-picker';

const RegUserform = () => {
    const[{user},] = useStateValue();
    const [sport,setSport] =useState('');
    const [slots,setSlot] =useState('');
    const [regno, setRegno] = useState('');
    const [players, setPlayers] = useState('');
    const [equip, setEquip] = useState('No');
    const [addp, setAddp] = useState('No');
    const [validated, setValidated] = useState(false);
    const [timeses,setTimeses] =useState([]);
    const [date,setDate] =useState(new Date());
    let sd=[];
    let timeleft=[];
    let times=["9:00-10:00","10:00-11:00","11:00-12:00","12:00-1:00","1:00-2:00","2:00-3:00","3:00-4:00","4:00-5:00"]
    let days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

    useEffect(() => {
        fetchSlots();
    }, [])

    const fetchSlots = async ()=>{
        const sds=await db.collection("Booking").doc("Slots").get()
        const asd= sds.data().slotlist.filter(s => s.dates === "15-5-2021")
        console.log(asd)
        var i;
        for(i=0;i<sds.data().slotlist.length;i++){
            sd.push(sds.data().slotlist[i].slots)
        }
        for(i=0;i<times.length;i++){
            if(!sd.includes(times[i])){
                timeleft.push(times[i])
            }
        }
        setTimeses(timeleft);
    }
    
    const createSlot = async (e)=>{
        e.preventDefault();
        const id= Math.floor(Math.random()*1000000);
        const email=user?.email;
        const day= String(date.getDate())
        const month= String(date.getMonth()+1)
        const year=String(date.getFullYear());
        const dates=day+"-"+month+"-"+year
        const slot={sport,players,regno,email,id,equip,addp,slots,dates}
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
                <Form.Control required onChange={event=>setRegno(event.target.value)} style={{textTransform:'uppercase'}} type="text" placeholder="yyDEGXXXX" />
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
        <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
        Choose Date
        </Form.Label>
        <br/>
        <DatePicker
        required
        name="Booking Date"
        format="y-MM-dd"
        onChange={setDate}
        value={date}
        />
        <p>{date.getDay() ? days[date.getDay()-1] : null}, {date.getDate()}-{date.getMonth()+1}-{date.getFullYear()}</p>

        <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
        Choose Slot
        </Form.Label>
        <Form.Control onChange={(e)=>{setSlot(e.target.value)}} required  as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
            <option >Choose..</option>
            {timeses.map(data =>(<option value={data}>{data}</option>))}
        </Form.Control>

        <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
        Choose if Equipment needed
        </Form.Label>
        <Form.Control onChange={(e)=>{setEquip(e.target.value)}} required  as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
            <option >Choose..</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </Form.Control>

        <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
        Choose if other players can join
        </Form.Label>
        <Form.Control onChange={(e)=>{setAddp(e.target.value)}} required  as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
            <option >Choose..</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </Form.Control>

        <Form.Group controlId="formBasicCheckbox">
            <Form.Check required type="checkbox" label="I confirm my booking." />
        </Form.Group>

        <Button variant="dark" type="submit" onClick={createSlot}>
            <Link to="/" style={{textDecoration: "none",color:"white" }} >Book Slot</Link>
        </Button>
        </Form>

        </>
    )
}

export default RegUserform

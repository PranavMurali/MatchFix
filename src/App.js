import {useEffect} from "react"
import Regform from "./components/form/Regform";
import Sigform from "./components/userform/Signup";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Navs from "./components/navbar/Navs";
import RegUserform from "./components/regeduser/RegUser";
import Home from "./components/home/Home";
import Football from "./components/football/Football"
import Basketball from "./components/basketball/Basket"
import Cricket from "./components/cricket/Cricket"
import Games from "./components/more/Games"
import Login from "./components/login/Login";
import Reguserbook from "./components/reguserform/Reguserbook"
import { useStateValue } from "./StateProvider";
import ripples from "./ripples.png"
import {auth} from "./firebase"
import Particle from "./components/particles/particle";
import Profile from "./components/profile/Profile";

function App() {
  const[{user},dispatch]=useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser);
      if (authUser){
        dispatch({
          type:"SET_USER",
          data:authUser,
        })
      }

      else{
        dispatch({
          type:"SET_USER",
          data: null,
        })

      }

    })

  },[user])
  console.log("user is",user);

  return (
      <Router>
      <Navs></Navs>
      <Switch>
        <Route path="/guest" exact>
          <Regform />
        </Route>

        <Route path="/" exact>
          <Home/>
        </Route>

        <Route path="/signup" exact>
          <Sigform />
        </Route>
        
        <Route path="/profile" exact>
          <Profile/>
        </Route>

        <Route path="/user" exact>
          <RegUserform/>
        </Route>
        
        <Route path="/football" exact>
          <Football />
        </Route>

        <Route path="/basketball" exact>
          <Basketball />
        </Route>

        <Route path="/cricket" exact>
          <Cricket/>
        </Route>

        <Route path="/more" exact>
          <Games/>
        </Route>

        <Route path="/particle" exact>
          <Particle/>
        </Route>

        <Route path="/login" exact>
          <Login/>
        </Route>

        <Route path="/regbookslot" exact>
          <Reguserbook/>
        </Route>
      </Switch> 
    </Router>
      
  );
}

export default App;

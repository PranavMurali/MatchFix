import {useEffect} from "react"
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
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase"
import Profile from "./components/profile/Profile";
import "./App.css"
import Admin from "./components/admin/Admin";

function App() {
  const[{user},dispatch]=useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
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

  return (
    <div className="bg">
      <Router>
      <Navs></Navs>
      <Switch>

        <Route path="/" exact>
          <Home/>
        </Route>

        <Route path="/signup" exact>
          <Sigform />
        </Route>
        
        <Route path="/profile" exact>
          <Profile/>
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

        <Route path="/login" exact>
          <Login/>
        </Route>

        <Route path="/userbooking" exact>
          <RegUserform/>
        </Route>
        
        <Route path="/admin" exact>
          <Admin/>
        </Route>

      </Switch> 
    </Router>
    </div>
  );
}

export default App;

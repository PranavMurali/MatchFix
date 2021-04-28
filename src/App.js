import Regform from "./components/form/Regform";
import Sigform from "./components/userform/Signup";
import { Button} from 'react-bootstrap'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Navs from "./components/navbar/Navs";
import RegUserform from "./components/regeduserform/RegUser";
import Home from "./components/home/Home";
import Football from "./components/football/Football"
import Basketball from "./components/basketball/Basket"
import Cricket from "./components/cricket/Cricket"
import Games from "./components/more/Games"

function App() {
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

      </Switch> 
    </Router>

  );
}

export default App;

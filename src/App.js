
import { BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Login from './Componenets/Pages/Login';
import Register from './Componenets/Pages/Register'
import Home from './Componenets/Pages/Home';
function App() {
  return (
      <Router>
    <div className="App">
            <Switch>
            <Route exact path = "/login">
                <Login />
              </Route>
              <Route exact path = "/register">
                <Register />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route>
                <h2>Page Not Found</h2>
              </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './Login';


function App() {
  return (
    <div className="App">
      <h2>The Friend App</h2>
      <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {/* <li>
            <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li> */}
        </ul>
        <Switch>
          {/* <PrivateRoute exact path="/protected" component={GasPrices} /> */}
          {/* <Route path="/logout" component={Logout} /> */}
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />    
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;

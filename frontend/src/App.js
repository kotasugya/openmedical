import React from 'react';
import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//components
import {UsersNew} from './containers/users/UsersNew.jsx';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/users/new">
          <UsersNew />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//components
import {UsersNew} from './containers/users/UsersNew.jsx';
import {UsersShow} from './containers/users/UsersShow.jsx';
import {usersNew} from './urls/index.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/users">
          <UsersNew />
        </Route>
        <Route exact path = "/users/:id">
          <UsersShow />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

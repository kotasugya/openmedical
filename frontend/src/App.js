import React, { useState } from 'react';
import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//components
import {UsersNew} from './containers/users/UsersNew.jsx';
import {UsersShow} from './containers/users/UsersShow.jsx';
import {UsersLogin} from './containers/users/UsersLogin.jsx';
import {Home} from './containers/Home';


function App() {
  const [loggedInStatus, setLoggedInStatus] = useState("ログインしてません")
  const [user, setUser] = useState({})

  return (
    <Router>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/users" component = {UsersNew} />
        <Route exact path = "/users/:id" component = {UsersShow} />
        <Route exact path = "/login" component = {UsersLogin} />
      </Switch>
    </Router>
  );
}

export default App;

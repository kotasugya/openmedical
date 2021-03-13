import React, { useState } from 'react';
import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import history from 'history/createBrowserHistory';

//components
import {Home} from './containers/Home';
import {UsersNew} from './containers/users/UsersNew';
import {UsersShow} from './containers/users/UsersShow';
import {UsersLogin} from './containers/users/UsersLogin';
import {CompaniesNew} from './containers/companies/CompaniesNew';




function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path = "/" component = {Home} />
        {/* ユーザー */}
        <Route exact path = "/users" component = {UsersNew} />
        <Route exact path = "/users/:id" component = {UsersShow} />
        <Route exact path = "/login" component = {UsersLogin} />

        {/* 企業 */}
        <Route exact path = "/companies/new" component = {CompaniesNew} />
      </Switch>
    </Router>
  );
}

export default App;

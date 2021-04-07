import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
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
import {usersEdit } from './urls';
import {CompaniesNew} from './containers/companies/CompaniesNew';
import {CompaniesIndex} from './containers/companies/CompaniesIndex';
import {CompaniesShow} from './containers/companies/CompaniesShow';
import {ReviewsNew} from './containers/reviews/ReviewsNew';
import {ReviewsShow} from './containers/reviews/ReviewsShow';
import {ReviewsIndex} from './containers/reviews/ReviewsIndex';

import {EnrollmentsNew} from './containers/enrollments/EnrollmentsNew';
function App() {

  return (
    <Router history={history}>
      <Switch>
        <Route exact path = "/" component = {Home} />
        {/* ユーザー */}
        <Route exact path = "/users" component = {UsersNew} />
        <Route
          exact path = "/users/:id"
          render = {({match})=>
            <UsersShow
              match = {match}
            />
          }
        />
        <Route exact path = "/users/edit" component = {usersEdit} />
        <Route exact path = "/login" component = {UsersLogin} />

        {/* 企業 */}
        <Route exact path = "/companies/new" component = {CompaniesNew} />
        <Route exact path = "/companies" component = {CompaniesIndex} />
        <Route
          exact path = "/companies/:id"
          render = {({match})=>
            <CompaniesShow
              match = {match}
            />
          }
        />

        {/* レビュー */}
        <Route  exact path = "/reviews/new" component = {ReviewsNew} />
        <Route  exact path = "/reviews/:id" component = {ReviewsShow} />
        <Route  exact path = "/:companyId/reviews" component = {ReviewsIndex} />

        {/* 在籍情報 */}
        <Route exact path = "/enrollments/new" component = {EnrollmentsNew} />
      </Switch>
    </Router>
  );
}

export default App;

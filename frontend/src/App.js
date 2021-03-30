import React from 'react';
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
import {ReviewsNew} from './containers/reviews/ReviewsNew';
import {ReviewsShow} from './containers/reviews/ReviewsShow';
import {EnrollmentsNew} from './containers/enrollments/EnrollmentsNew';
import { CompaniesIndex } from './containers/companies/CompaniesIndex';
import { ReviewsIndex } from './containers/reviews/ReviewsIndex';
import { usersEdit } from './urls';




function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path = "/" component = {Home} />
        {/* ユーザー */}
        <Route exact path = "/users" component = {UsersNew} />
        <Route exact path = "/users/:id" component = {UsersShow} />
        <Route exact path = "/users/edit" component = {usersEdit} />
        <Route exact path = "/login" component = {UsersLogin} />

        {/* 企業 */}
        <Route exact path = "/companies/new" component = {CompaniesNew} />
        <Route exact path = "/companies" component = {CompaniesIndex} />

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

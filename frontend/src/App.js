import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import history from 'history/createBrowserHistory'

// components
import { Home } from './containers/Home'
import { UsersNew } from './containers/users/UsersNew'
import { UsersShow } from './containers/users/UsersShow'
import { UsersLogin } from './containers/users/UsersLogin'
import { UsersEdit } from './containers/users/UsersEdit'
import { CompaniesNew } from './containers/companies/CompaniesNew'
import { CompaniesIndex } from './containers/companies/CompaniesIndex'
import { CompaniesShow } from './containers/companies/CompaniesShow'
import { ReviewsNew } from './containers/reviews/ReviewsNew'
import { ReviewCategoriesShow } from './containers/reviewCategories/ReviewCategoriesShow'

import { EnrollmentsNew } from './containers/enrollments/EnrollmentsNew'
import { SearchCompanies } from './containers/companies/SearchCompanies'

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />

        {/* ユーザー */}
        <Route exact path="/users" component={UsersNew} />
        <Route
          exact
          path="/users/:id"
          render={({ match }) => <UsersShow match={match} />}
        />
        <Route
          exact
          path="/users/:id/edit"
          render={({ match }) => <UsersEdit match={match} />}
        />
        <Route exact path="/login" component={UsersLogin} />

        {/* 企業 */}
        <Route exact path="/companies/new" component={CompaniesNew} />
        <Route exact path="/companies" component={CompaniesIndex} />
        <Route
          exact
          path="/companies/:id"
          render={({ match }) => <CompaniesShow match={match} />}
        />

        {/* 検索 */}
        <Route
          exact
          path="/companies/search?search=:keyword"
          render={({ match }) => <SearchCompanies match={match} />}
        />

        {/* レビュー */}
        <Route exact path="/reviews/new" component={ReviewsNew} />
        <Route
          exact
          path="/companies/:companyId/reviewCategories/:reviewCategoryId/reviews"
          render={({ match }) => <ReviewCategoriesShow match={match} />}
        />

        {/* 在籍情報 */}
        <Route exact path="/enrollments/new" component={EnrollmentsNew} />
      </Switch>
    </Router>
  )
}

export default App

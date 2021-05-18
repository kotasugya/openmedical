import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import history from 'history/createBrowserHistory'
import axios from 'axios'

// components
import { Home } from './containers/Home'
import { UsersNew } from './containers/users/UsersNew'
import { UsersShow } from './containers/users/UsersShow'
import { Login } from './containers/sessions/Login'
import { UsersEdit } from './containers/users/UsersEdit'
import { CompaniesNew } from './containers/companies/CompaniesNew'
import { CompaniesIndex } from './containers/companies/CompaniesIndex'
import { CompaniesShow } from './containers/companies/CompaniesShow'
import { ReviewsNew } from './containers/reviews/ReviewsNew'
import { ReviewsTop } from './containers/reviews/ReviewsTop'
import { ReviewsIndex } from './containers/reviews/ReviewsIndex'
import { ReviewCategoriesShow } from './containers/reviewCategories/ReviewCategoriesShow'
import { EnrollmentsNew } from './containers/enrollments/EnrollmentsNew'
import { SearchCompanies } from './containers/companies/SearchCompanies'

// Api
import { usersCheckLogin } from './urls/index'
import { auth } from './firebase'

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState('未ログイン')
  const [user, setUser] = useState({})

  const handleLogin = (data) => {
    setLoggedInStatus('ログイン中')
    setUser(data.user)
  }
  const handleLogout = () => {
    setLoggedInStatus('未ログイン')
    setUser({})
  }
  // ログイン中か否かを判断する
  useEffect(() => {
    checkLoginStatus()
  })
  const checkLoginStatus = () => {
    axios
      .get(usersCheckLogin, { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in === 'true') {
          setLoggedInStatus('ログイン中')
          setUser(response.data.user)
        } else if (!response.data.logged_in === 'false') {
          setLoggedInStatus('未ログイン')
          setUser({})
        }
        console.log('ログイン状況', response)
      })
      .catch((error) => {
        console.log('ログインエラー', error)
      })
  }

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />

        {/* ユーザー */}
        {/* <Route exact path="/users" component={UsersNew} /> */}
        <Route
          exact
          path="/users/new"
          render={(props) => (
            <UsersNew
              {...props}
              handleLogin={handleLogin}
              loggedInStatus={loggedInStatus}
            />
          )}
        />
        <Route
          exact
          path="/users/:id"
          render={({ match }) => (
            <UsersShow match={match} handleLogout={handleLogout} />
          )}
        />
        <Route
          exact
          path="/users/:id/edit"
          render={({ match }) => <UsersEdit match={match} />}
        />

        {/* ログイン */}
        <Route
          exact
          path="/login"
          render={(props) => (
            <Login
              {...props}
              handleLogin={handleLogin}
              loggedInStatus={loggedInStatus}
            />
          )}
        />

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
        <Route exact path="/reviews" component={ReviewsTop} />
        <Route exact path="/reviews/new" component={ReviewsNew} />
        <Route
          exact
          path="/companies/:companyId/reviewCategories/:reviewCategoryId/reviews"
          render={({ match }) => <ReviewCategoriesShow match={match} />}
        />

        {/* 在籍情報 */}
        <Route exact path="/enrollments/new" component={EnrollmentsNew} />
        {/* <Route
          exact
          path="/companies/:companyId/enrollments/:id"
          component={EnrollmentsShow}
        /> */}
      </Switch>
    </Router>
  )
}

export default App

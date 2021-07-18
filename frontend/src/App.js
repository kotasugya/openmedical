import React, { useReducer } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import history from 'history/createBrowserHistory'

// store
import { Context, initialState, reducer } from './store'

// auth
import PrivateRoute from './auth/PrivateRoute'
import { AuthProvider } from './auth/AuthProvider'

// components
import { Home } from './containers/Home'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { UsersNew } from './containers/users/UsersNew'
import { UsersShow } from './containers/users/UsersShow'
import { Login } from './containers/sessions/Login'
import { UsersEdit } from './containers/users/UsersEdit'
import { CompaniesNew } from './containers/companies/CompaniesNew'
import { CompaniesIndex } from './containers/companies/CompaniesIndex'
import { CompaniesShow } from './containers/companies/CompaniesShow'
import { ReviewsNew } from './containers/reviews/ReviewsNew'
import { ReviewsTop } from './containers/reviews/ReviewsTop'
import { ReviewCategoriesShow } from './containers/reviewCategories/ReviewCategoriesShow'
import { ReviewCategoiresNew } from './containers/reviewCategories/ReviewCategoriesNew'
import { EnrollmentsNew } from './containers/enrollments/EnrollmentsNew'
import { SearchCompanies } from './containers/companies/SearchCompanies'
import { About } from './containers/About'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>
      <AuthProvider>
        <Router history={history}>
          <Switch>
            <div className="container">
              <Header />
              <div className="main">
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />

                {/* ユーザー */}
                <Route exact path="/users" component={UsersNew} />
                <PrivateRoute
                  exact
                  path="/users/:id"
                  render={({ match }) => <UsersShow match={match} />}
                />
                <Route
                  exact
                  path="/users/:id/edit"
                  render={({ match }) => <UsersEdit match={match} />}
                />

                {/* ログイン */}
                <Route exact path="/login" component={Login} />

                {/* 企業 */}
                <Route exact path="/companies/admin/new" component={CompaniesNew} />
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
                <PrivateRoute exact path="/reviews" component={ReviewsTop} />
                <PrivateRoute
                  exact
                  path="/reviews/new"
                  component={ReviewsNew}
                />
                <Route
                  exact
                  path="/companies/:companyId/reviewCategories/:reviewCategoryId/reviews"
                  render={({ match }) => <ReviewCategoriesShow match={match} />}
                />
                {/* レビューカテゴリー */}
                <Route exact path="/review_category/new" component={ReviewCategoiresNew} />

                {/* 在籍情報 */}
                <PrivateRoute
                  exact
                  path="/enrollments/new"
                  component={EnrollmentsNew}
                />
              </div>
              <Footer />
            </div>
          </Switch>
        </Router>
      </AuthProvider>
    </Context.Provider>
  )
}

export default App

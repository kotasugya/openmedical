import React, { useState } from 'react'
// component
import { Header } from '../components/Header'
// container
import { SearchCompanyList } from './companies/SearchCompanyList'
import { ReviewsNew } from './reviews/ReviewsNew'
import { Login } from './sessions/Login'

export const Home = (props) => {
  const [searchKeyWord, setSearchKeyWord] = useState('')
  const handleChange = (e) => {
    setSearchKeyWord(e.target.value)
  }
  const handleSuccessfulAuthentication = (data) => {
    props.handleLogin(data)
  }

  return (
    <>
      <Header />
      <h1>Home</h1>
      <h2>ログイン状態：{props.loggedInStatus}</h2>
      <input type="text" placeholder="医院で検索する" onChange={handleChange} />
      <SearchCompanyList keyword={searchKeyWord} />
      <ReviewsNew
        handleSuccessfulAuthentication={handleSuccessfulAuthentication}
      />
      <Login handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
    </>
  )
}

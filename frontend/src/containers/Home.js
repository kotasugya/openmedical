import React, { useState } from 'react'
import { Footer } from '../components/Footer'
// component
import { Header } from '../components/Header'
// container
import { SearchCompanyList } from './companies/SearchCompanyList'
import { ReviewsNew } from './reviews/ReviewsNew'
import { Login } from './sessions/Login'
import { UsersNew } from './users/UsersNew'

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
      <input type="text" placeholder="医院で検索する" onChange={handleChange} />
      <SearchCompanyList keyword={searchKeyWord} />
      <Footer />
    </>
  )
}

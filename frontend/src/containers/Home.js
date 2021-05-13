import React, { useState } from 'react'
import './home.css'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { SearchCompanyList } from './companies/SearchCompanyList'

export const Home = (props) => {
  const [searchKeyWord, setSearchKeyWord] = useState('')
  const handleChange = (e) => {
    setSearchKeyWord(e.target.value)
  }

  return (
    <>
      <body>
        <Header />
        <div className="mainWrapper">
          <h2>医院を検索する</h2>
          <input
            className="searchInput"
            type="text"
            placeholder="医院で検索する"
            onChange={handleChange}
          />
          <div className="companyList">
            <SearchCompanyList keyword={searchKeyWord} />
          </div>
        </div>
        <Footer />
      </body>
    </>
  )
}

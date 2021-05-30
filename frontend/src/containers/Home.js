import React, { useState } from 'react'
import { SearchCompanyList } from './companies/SearchCompanyList'
import './home.css'

export const Home = () => {
  const [searchKeyWord, setSearchKeyWord] = useState('')
  const handleChange = (e) => {
    setSearchKeyWord(e.target.value)
  }

  return (
    <>
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
    </>
  )
}

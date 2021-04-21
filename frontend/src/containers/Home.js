import React, { useState } from 'react'
// component
import { Header } from '../components/Header'
// container
import { SearchCompaniesList } from './companies/SearchCompaniesList'

export const Home = () => {
  const [searchKeyWord, setSearchKeyWord] = useState('')
  const handleChange = (e) => {
    setSearchKeyWord(e.target.value)
  }

  return (
    <>
      <Header />
      <h1>Home</h1>
      <input type="text" placeholder="医院で検索する" onChange={handleChange} />
      {/* <button className="search-btn" onClick={handleSubmit} type="button">
        検索する
      </button> */}
      <button className="search-btn" type="button">
        検索する
      </button>
      <SearchCompaniesList keyword={searchKeyWord} />
    </>
  )
}

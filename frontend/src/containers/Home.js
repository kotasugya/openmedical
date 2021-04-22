import React, { useState } from 'react'
// component
import { Header } from '../components/Header'
// container
import { SearchCompanyList } from './companies/SearchCompanyList'

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
      <SearchCompanyList keyword={searchKeyWord} />
    </>
  )
}

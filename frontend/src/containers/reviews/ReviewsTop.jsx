import React, { useState, useContext } from 'react'
import './reviews.css'
import { SearchCompanies } from '../companies/SearchCompanies'
import { EnrollmentsNew } from '../enrollments/EnrollmentsNew'

export const ReviewsTop = () => {
  const [searchKeyWord, setSearchKeyWord] = useState('')
  const companyInformation = SearchCompanies(searchKeyWord)
  const handleChange = (e) => {
    setSearchKeyWord(e.target.value)
  }

  return (
    <>
      <h3>レポート対象医院を検索する</h3>
      <table className="companySelectZone">
        <p id="searchalert">在籍中または退職済みの医院をご指定ください。</p>
        <input
          className="selectCompany"
          type="text"
          placeholder="医院で検索する"
          onChange={handleChange}
        />
        <h4 className="h4-selectedCompany">下記の医療機関をレビュー致します</h4>
        <div className="selectedCompanyName">
          {companyInformation.companies[0].name}
        </div>
        <p className="searchCompanyAsterisk">
          <solid>※</solid>検索すると表示が変わります
        </p>
      </table>
      <EnrollmentsNew companyInformation={companyInformation.companies[0]} />
    </>
  )
}

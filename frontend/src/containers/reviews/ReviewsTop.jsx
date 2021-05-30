import React, { useState, useContext } from 'react'
import './reviews.css'
import { AuthContext } from '../../auth/AuthProvider'
import { Context } from '../../store'
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
      <input
        className="selectCompany"
        type="text"
        placeholder="医院で検索する"
        onChange={handleChange}
      />
      <h4 className="h4-selectedCompany">この医療機関をレビュー致します</h4>
      <div className="selectedCompanyName">
        {companyInformation.companies[0].name}
      </div>
      <p className="searchCompanyAsterisk">
        <solid>※</solid>検索すると表示が変わります
      </p>
      <EnrollmentsNew companyInformation={companyInformation.companies[0]} />
    </>
  )
}

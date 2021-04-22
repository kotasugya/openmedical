import React from 'react'
import { Link } from 'react-router-dom'
import { SearchCompanies } from './SearchCompanies'

export const SearchCompanyList = ({ keyword }) => {
  const companyList = SearchCompanies(keyword)
  return (
    <>
      <div>
        {companyList.companies.map((company) => (
          <div>
            <Link to={`companies/${company.id}`}>{company.name}</Link>
          </div>
        ))}
      </div>
    </>
  )
}

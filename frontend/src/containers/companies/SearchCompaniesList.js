import React from 'react'
import { SearchCompanies } from './SearchCompanies'

export const SearchCompaniesList = ({ keyword }) => {
  const companiesList = SearchCompanies(keyword)

  return (
    <>
      <div>
        <ul>
          {companiesList.companies.map((company) => (
            <div>{company.name} </div>
          ))}
        </ul>
      </div>
    </>
  )
}

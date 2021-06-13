import React, { useState, useEffect } from 'react'
import { searchCompanies } from '../../urls/index'
import axios from 'axios'

const initialState = {
  companies: [
    {
      id: null,
      name: '',
    },
  ],
}
export const SearchCompanies = (keyword) => {
  const [companyList, setCompanyList] = useState(initialState)

  const fetchCompany = (keyword) =>
    axios
      .get(searchCompanies(keyword))
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        console.log(error)
        return { companies: [] }
      })

  useEffect(() => {
    fetchCompany(keyword).then(
      (data) => setCompanyList(data),
      console.log(companyList)
    )
  }, [keyword])

  return companyList
}

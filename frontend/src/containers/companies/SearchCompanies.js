import React, { useState, useEffect } from 'react'
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
      .get(`http://localhost:3001/api/v1/companies/search?search=${keyword}`)
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

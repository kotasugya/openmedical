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

  // const SearchCompany = (keyword) => {
  // 変数名にListを使う場合は、単数系にするのが一般的だったはず
  // urlはurl.jsに定義してあるものを使って！
  // const companyList = axios
  //   .get(`http://localhost:3001/api/v1/companies/search?search=test1`)
  //   .then((res) => {
  //     return res.data.results
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //     return { companies: [] }
  //   })
  // console.log(companyList)
  // return companyList

  const fetchCompany = (keyword) =>
    axios
      .get(`http://localhost:3001/api/v1/companies/search?search=${keyword}`)
      // .get(`http://localhost:3001/api/v1/companies/search?search=test1`)
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

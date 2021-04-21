import { useState, useEffect } from 'react'
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
  const [companiesList, setCompaniesList] = useState(initialState)

  // const fetchCompany = (keyword) => {
  //   axios
  //     .get(`http://localhost:3001/api/v1/companies/search?search=${keyword}`)
  //     .then((response) => response.data)
  //   const data = response.data.results
  //   setCompaniesList(data)
  // }
  const fetchCompany = async (keyword) => {
    const response = await axios.get(
      `http://localhost:3001/api/v1/companies/search?search=${keyword}`
      // 持ってきたwordはここのAPI処理に使われる
    )
    const data = response.data.results
    setCompaniesList(data)
    // APIで返る値をmoviesに保持
  }
  useEffect(() => {
    fetchCompany(keyword)
  }, [keyword])

  return companiesList
}

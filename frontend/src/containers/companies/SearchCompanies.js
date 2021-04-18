import { useState, useEffect } from 'react'
import axios from 'axios'
import { search } from '../../urls/index'

const initialState = {
  companies: [
    {
      id: null,
      name: '',
    },
  ],
}
const SearchCompanies = (word) => {
  const [companiesList, setCompaniesList] = useState(initialState)

  const feachCompanies = () => {
    axios.get(search).then((response) => response.data)
  }
}

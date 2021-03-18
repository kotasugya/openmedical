import React, {useEffect, useState, useReducer} from 'react';
import axios from 'axios'
import {companiesIndex} from '../../urls/index'
import { Fragment } from 'react';

const initialState = {
  "companies":{
    "id":null,
    "name":""
  }
}

export const CompaniesIndex = () =>{
  const [companiesList, setCompaniesList] = useState(initialState)

  const fetchCompaniesIndex = () =>{
    return axios.get(companiesIndex)
    .then(response => {
      return response.data
    })
    .catch((error) => console.error(error))
  }

  useEffect(() => {
    fetchCompaniesIndex()
    .then((data) =>
      setCompaniesList(data),
      console.log({companiesList})
    )
  }, [])

  return(
    <Fragment>
      <h2>企業一覧</h2>
      {companiesList.companies.name}
    </Fragment>
  )
}
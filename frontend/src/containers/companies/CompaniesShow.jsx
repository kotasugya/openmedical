import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios'
import {companiesShow} from '../../urls/index';
import {reviewsIndex} from '../../urls/index';
import {reviewCategoriesIndex} from '../../urls/index';
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import './companies.css'


const companyInitialState = {
  "company":{
    "id":null,
    "name":"",
  }
}
const reviewInitialState = {
  "review":{
    "id":null,
    "user_id": null,
    "company_id": null,
    "review_category_id": null,
    "review_content":""
  }
}
const reviewCategoryInitialState = {
  "review_category":{
    "id":null,
    "name":""
  }
}
export const CompaniesShow = ({match}) => {
  const [companyInformation, setCompanyInformation] = useState(companyInitialState)
  const [reviewInformation, setReviewInformation] = useState(reviewInitialState)
  const [reviewCategoryInformation, setReviewCategoryInformation] = useState(reviewCategoryInitialState)

  const fetchCompaniesShow = (id) => {
    return axios.get(companiesShow(id))
    .then(response => {
      return response.data
    })
    .catch((error) => console.error(error))
  }

  const fetchReviewCategoriesIndex = (companyId) => {
    return axios.get(reviewCategoriesIndex(companyId))
    .then(response => {
      return response.data
    })
    .catch((error) => console.error(error))
  }

  useEffect(() => {
    fetchCompaniesShow(match.params.id)
    .then((data) =>
      setCompanyInformation(data),
      console.log({companyInformation})
    )
    fetchReviewCategoriesIndex(match.params.id)
    .then((data) =>
      setReviewCategoryInformation(data),
      console.log(reviewCategoryInformation)
    )
  }, [])

  return(
    <Fragment>
      <body>
        <Header/>
          <div className = "mainWrapper">
            <h2>企業情報</h2>
            <table className = "companyShowTable">
              <tr>
                <th>企業名</th>
                <td>{companyInformation.company.name}</td>
              </tr>
            </table>
          </div>
        <Footer/>
      </body>
    </Fragment>
  )
}
import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios'
import {companiesShow} from '../../urls/index';
import {reviewsIndex} from '../../urls/index';
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
export const CompaniesShow = ({match}) => {
  const [companyInformation, setCompanyInformation] = useState(companyInitialState)
  const [reviewInformation, setReviewInformation] = useState(reviewInitialState)

  const fetchCompaniesShow = (id) => {
    return axios.get(companiesShow(id),
                    { withCredentials: true })
    .then(response => {
      return response.data
    })
    .catch((error) => console.error(error))
  }

  const fetchReviewsIndex = (companyId) => {
    return axios.get(reviewsIndex(companyId),
                    { withCredentials: true })
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
    fetchReviewsIndex(match.params.id)
    .then((data) =>
      setReviewInformation(data),
      console.log(reviewInformation)
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
              {/* レビューカテゴリー
              ①②
              ③④ */}
              {/* 社員データ
              ・職種別年収
                歯科医師 〇〇万円
                歯科衛生士 〇〇万円 */}
              {/* <tr>
                <th>レビュー</th>
                <td>{reviewInformation.reviews[0].review_content}</td>
              </tr> */}
            </table>
          </div>
        <Footer/>
      </body>
    </Fragment>
  )
}
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { companiesShow, reviewCategoriesIndex } from '../../urls/index'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import './companies.css'

const companyInitialState = {
  company: {
    id: null,
    name: '',
  },
}
const reviewInitialState = {
  review: {
    id: null,
    user_id: null,
    company_id: null,
    review_category_id: null,
    review_content: '',
  },
}
const reviewCategoryInitialState = {
  review_categories: [
    {
      id: null,
      name: '',
    },
  ],
}

export const CompaniesShow = ({ match }) => {
  const [companyInformation, setCompanyInformation] = useState(
    companyInitialState
  )
  const [] = useState(reviewInitialState)
  const [reviewCategoryInformation, setReviewCategoryInformation] = useState(
    reviewCategoryInitialState
  )

  const fetchCompaniesShow = (id) =>
    axios
      .get(companiesShow(id))
      .then((response) => response.data)
      .catch((error) => console.error(error))

  const fetchReviewCategoriesIndex = (companyId) =>
    axios
      .get(reviewCategoriesIndex(companyId))
      .then((response) => response.data)
      .catch((error) => console.error(error))

  useEffect(() => {
    fetchCompaniesShow(match.params.id).then(
      (data) => setCompanyInformation(data),
      console.log({ companyInformation })
    )
    fetchReviewCategoriesIndex(match.params.id).then(
      (data) => setReviewCategoryInformation(data),
      console.log(reviewCategoryInformation)
    )
  }, [])

  return (
    <>
      <body>
        <Header />
        <div className="mainWrapper">
          <h2>{companyInformation.company.name}</h2>
          <div className="review-categories">
            {reviewCategoryInformation.reviewCategories.map(
              (reviewCategory) => (
                <div>{reviewCategory.name}</div>
              )
            )}
          </div>
        </div>
        <Footer />
      </body>
    </>
  )
}

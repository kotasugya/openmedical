import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './companies.css'
import { Link } from 'react-router-dom'
import { companiesShow, reviewsShow } from '../../urls/index'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ReviewCategoriesIndex } from '../reviewCategories/ReviewCategoriesIndex'

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

export const CompaniesShow = ({ match }) => {
  const [companyInformation, setCompanyInformation] = useState(
    companyInitialState
  )
  const [reviewInformation, setReviewInformation] = useState(reviewInitialState)
  const reviewCategoryList = ReviewCategoriesIndex()

  const fetchCompaniesShow = (id) =>
    axios
      .get(companiesShow(id))
      .then((response) => response.data)
      .catch((error) => console.error(error))

  const fetchReview = (companyId, reviewCategoryId, id) =>
    axios
      .get(reviewsShow(companyId, reviewCategoryId, id))
      .then((response) => response.data)
      .catch((error) => console.error(error))

  useEffect(() => {
    fetchCompaniesShow(match.params.id).then(
      (data) => setCompanyInformation(data),
      console.log({ companyInformation })
    )
    fetchReview(match.params.companyId, Math.floor(Math.random() * 6), 2).then(
      (data) => setReviewInformation(data),
      console.log(reviewInformation)
    )
  }, [])

  return (
    <>
      <body>
        <Header />
        <div className="mainWrapper">
          <h2>{companyInformation.company.name}</h2>
          <h3>カテゴリー</h3>
          <div className="review-categories">
            {reviewCategoryList.review_categories.map(
              (reviewCategory, index) => (
                <div className="categories-name">
                  <Link
                    to={`/companies/${
                      companyInformation.company.id
                    }/reviewCategories/${index + 1}/reviews`}
                  >
                    {reviewCategory.name} <span>詳しく見る</span>
                  </Link>
                </div>
              )
            )}
          </div>
          <div className="reviewIndex">
            <h3>口コミ一覧</h3>
            {reviewInformation.review.content}
          </div>
        </div>
        <Footer />
      </body>
    </>
  )
}

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './reviewCategories.css'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { EnrollmentsShow } from '../enrollments/EnrollmentsShow'
import { reviewCategoriesShow, reviewsIndex } from '../../urls/index'

const reviewInitialState = {
  reviews: [
    {
      id: null,
      user_id: null,
      company_id: null,
      review_category_id: null,
      review_content: '',
      enrollment_id: null,
    },
  ],
}

const reviewCategoryInitialState = {
  review_category: {
    id: null,
    name: '',
  },
}

export const ReviewCategoriesShow = ({ match }) => {
  const [reviewCategoryInformation, setReviewCategoryInformation] = useState(
    reviewCategoryInitialState
  )
  const [reviewInformation, setReviewInformation] = useState(reviewInitialState)

  const fetchReviewCategoriesShow = (companyId, reviewCategoryId) =>
    axios
      .get(reviewCategoriesShow(companyId, reviewCategoryId))
      .then((response) => response.data)
      .catch((error) => console.error(error))

  const fetchReviewsIndex = (companyId, reviewCategoryId) =>
    axios
      .get(reviewsIndex(companyId, reviewCategoryId))
      .then((response) => response.data)
      .catch((error) => console.error(error))

  useEffect(() => {
    fetchReviewCategoriesShow(
      match.params.companyId,
      match.params.reviewCategoryId
    ).then(
      (data) => setReviewCategoryInformation(data),
      console.log({ reviewCategoryInformation })
    )
    fetchReviewsIndex(
      match.params.companyId,
      match.params.reviewCategoryId
    ).then(
      (data) => setReviewInformation(data),
      console.log({ reviewInformation })
    )
  }, [])

  return (
    <>
      <body>
        <Header />
        <div className="mainWrapper">
          <h3>
            {reviewCategoryInformation.review_category.name}
            <span>-企業名入れる-</span>
          </h3>
          {reviewInformation.reviews.map((review) => (
            <div className="review">
              <div className="review-category">
                {reviewCategoryInformation.review_category.name}
                {/* 回答日：
                {reviewCategoryInformation.review_category.created_at} */}
              </div>
              <div className="enrollment">
                <EnrollmentsShow
                  companyId={match.params.companyId}
                  enrollmentId={review.enrollment_id}
                />
              </div>
              <div className="review-content">{review.review_content}</div>
            </div>
          ))}
        </div>
        <Footer />
      </body>
    </>
  )
}

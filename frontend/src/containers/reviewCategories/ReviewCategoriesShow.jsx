import React, { useEffect, useState } from 'react'
import moment from 'moment'
import './reviewCategories.css'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { EnrollmentsShow } from '../enrollments/EnrollmentsShow'
import { reviewCategoriesShow, reviewsIndex } from '../../urls/index'

// MaterialUI
import AccountBalanceSharpIcon from '@material-ui/icons/AccountBalanceSharp'
import DoubleArrowSharpIcon from '@material-ui/icons/DoubleArrowSharp'
import CallMadeSharpIcon from '@material-ui/icons/CallMadeSharp'
import EmojiPeopleSharpIcon from '@material-ui/icons/EmojiPeopleSharp'
import ViewAgendaSharpIcon from '@material-ui/icons/ViewAgendaSharp'

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
const materialUiList = [
  <AccountBalanceSharpIcon />,
  <DoubleArrowSharpIcon />,
  <CallMadeSharpIcon />,
  <EmojiPeopleSharpIcon />,
  <ViewAgendaSharpIcon />,
]

export const ReviewCategoriesShow = ({ match }) => {
  const [reviewCategoryInformation, setReviewCategoryInformation] = useState(
    reviewCategoryInitialState
  )
  const [reviewInformation, setReviewInformation] = useState(reviewInitialState)
  const { state } = useLocation()

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

  console.log(state)

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
      <h3>
        {reviewCategoryInformation.review_category.name}
        <span className="company-name">
          -{state.companyInformation.company.name}-
        </span>
      </h3>
      {reviewInformation.reviews.map((review) => (
        <div className="review">
          <div className="review-category">
            <span className="review-category-icon">
              {materialUiList[reviewCategoryInformation.review_category.id - 1]}
            </span>
            {reviewCategoryInformation.review_category.name}
            <div className="review-date">
              回答日： {moment(review.created_at).format('YYYY-MM-DD')}
            </div>
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
    </>
  )
}

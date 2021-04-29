import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { reviewsIndex } from '../../urls/index'

const initialState = {
  reviews: [
    {
      id: null,
      user_id: null,
      company_id: null,
      review_category_id: null,
      review_content: '',
    },
  ],
}

export const ReviewsIndex = () => {
  const [reviewsList, setReviewsList] = useState(initialState)

  const fetchReviewsIndex = (companyId) =>
    axios
      .get(reviewsIndex(companyId))
      .then((response) => response.data)
      .catch((error) => console.error(error))

  useEffect(() => {
    fetchReviewsIndex(1).then(
      (data) => setReviewsList(data),
      console.log({ reviewsList })
    )
  }, [])

  return (
    <>
      <h2>レビュ一覧</h2>
      {reviewsList.reviews.map((review) => (
        <div>{review.review_content}</div>
      ))}
    </>
  )
}

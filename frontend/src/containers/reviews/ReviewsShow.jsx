import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { reviewsShow } from '../../urls/index'

const initialState = {
  review: {
    review_content: '',
  },
}

export const ReviewsShow = ({ match }) => {
  const [content, setContent] = useState(initialState)

  const fetchReviewsShow = (companyId, reviewCategoryId) => {
    return axios
      .get(reviewsShow(companyId, reviewCategoryId))
      .then((response) => {
        return response.data
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    fetchReviewsShow(
      match.params.companyId,
      match.params.reviewCategoryId
    ).then((data) => setContent(data), console.log({ content }))
  }, [])

  return <>{content.review.review_content}</>
}

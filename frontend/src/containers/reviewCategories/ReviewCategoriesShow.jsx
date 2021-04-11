import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { reviewCategoriesShow } from '../../urls/index'

const reviewInitialState = {
  review: {
    id: null,
    user_id: null,
    company_id: null,
    review_category_id: null,
    review_content: '',
  },
}

export const ReviewCategoriesShow = ({ match }) => {
  const [reviewInformation, setReviewInformation] = useState(reviewInitialState)

  const fetchReviewCategoriesShow = (companyId, reviewCategoryId) =>
    axios
      .get(reviewCategoriesShow(companyId, reviewCategoryId))
      .then((response) => response.data)
      .catch((error) => console.error(error))

  return(

  )
}

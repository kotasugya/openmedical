import React, { useState, useEffect } from 'react'
import { reviewCategoriesIndex } from '../../urls/index'
import axios from 'axios'

const reviewCategoryInitialState = {
  review_categories: [
    {
      id: null,
      name: '',
    },
  ],
}

export const ReviewCategoriesIndex = () => {
  const [reviewCategoryList, setReviewCategoryList] = useState(
    reviewCategoryInitialState
  )
  const fetchReviewCategoriesIndex = () =>
    axios
      .get(reviewCategoriesIndex)
      .then((response) => response.data)
      .catch((error) => console.error(error))

  useEffect(() => {
    fetchReviewCategoriesIndex().then(
      (data) => setReviewCategoryList(data),
      console.log(reviewCategoryList)
    )
  }, [])

  return reviewCategoryList
}

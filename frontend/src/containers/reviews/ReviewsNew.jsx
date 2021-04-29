import React, { useState } from 'react'
import axios from 'axios'
import { reviewsNew } from '../../urls/index'
import { SearchCompanies } from '../companies/SearchCompanies'
import { Header } from '../../components/Header'

export const ReviewsNew = () => {
  const [searchKeyWord, setSearchKeyWord] = useState('')
  const companyInformation = SearchCompanies(searchKeyWord)
  const [content, setContent] = useState('')
  const [content1, setContent1] = useState('')
  const [reviewCategoryId, setReviewCategoryId] = useState()

  const handleChange = (e) => {
    setSearchKeyWord(e.target.value)
  }

  const handleSubmit = (id) => {
    const newCategoryId = id
    console.log(newCategoryId)
    setReviewCategoryId(newCategoryId)

    const body = {
      review: [
        {
          user_id: 1,
          company_id: companyInformation.companies[0].id,
          review_category_id: reviewCategoryId,
          review_content: content,
        },
      ],
    }
    console.log(companyInformation, reviewCategoryId, body)
    const headers = { 'Content-Type': 'application/json' }
    axios
      .post(
        reviewsNew(companyInformation.companies[0].id, reviewCategoryId),
        body,
        headers
      )
      .then((response) => {
        console.log('success', response)
        alert('レポート投稿が成功しました')
      })
      .catch((error) => {
        console.log('failed', error)
        alert('投稿に失敗しました')
      })
  }

  return (
    <>
      <body>
        <Header />
        <input
          type="text"
          placeholder="医院で検索する"
          onChange={handleChange}
        />
        <h4>職場の雰囲気</h4>
        <form>
          <textarea
            name="companyCulture"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
          <button onClick={() => handleSubmit(1)} type="button">
            この内容で投稿する
          </button>
        </form>
        <h4>入職した理由</h4>
        <form>
          <textarea
            name="JoinReason"
            value={content1}
            onChange={(event) => setContent1(event.target.value)}
          />

          <button onClick={handleSubmit} type="button">
            レポートを投稿する
          </button>
        </form>
      </body>
    </>
  )
}

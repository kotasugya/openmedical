import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { reviewsNew } from '../../urls/index'
import { SearchCompanies } from '../companies/SearchCompanies'

export const ReviewsNew = () => {
  const [searchKeyWord, setSearchKeyWord] = useState('')
  // 検索ワードを保持する
  const handleChange = (e) => {
    setSearchKeyWord(e.target.value)
  }
  // 検索ワードで企業を探す
  const companyInformation = SearchCompanies(searchKeyWord)

  // レビューコンテンツ
  const [content, setContent] = useState('')
  const [content2, setContent2] = useState('')
  const [reviewCategoryId, setReviewCategoryID] = useState()

  const handleSubmit = (id) => {
    setReviewCategoryID(id)
    const body = {
      review: [
        {
          user_id: 1,
          company_id: companyInformation.companies.id,
          review_category_id: reviewCategoryId,
          review_content: content,
        },
      ],
    }
    console.log(companyInformation, reviewCategoryId)
    const headers = { 'Content-Type': 'application/json' }
    axios
      .post(
        reviewsNew(companyInformation.companies.id, reviewCategoryId),
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
      <input type="text" placeholder="医院で検索する" onChange={handleChange} />
      <h4>組織体制 / 企業文化</h4>
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
          value={content2}
          onChange={(event) => setContent2(event.target.value)}
        />

        <button onClick={handleSubmit} type="button">
          レポートを投稿する
        </button>
      </form>
    </>
  )
}

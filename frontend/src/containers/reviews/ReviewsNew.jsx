import React, { useState } from 'react'
import axios from 'axios'
import { reviewsNew } from '../../urls/index'
import { SearchCompanies } from '../companies/SearchCompanies'
import { Header } from '../../components/Header'

export const ReviewsNew = () => {
  const [searchKeyWord, setSearchKeyWord] = useState('')
  const companyInformation = SearchCompanies(searchKeyWord)
  const [content1, setContent1] = useState('')
  const [content2, setContent2] = useState('')
  const [content3, setContent3] = useState('')
  const [content4, setContent4] = useState('')
  const [content5, setContent5] = useState('')
  const [reviewCategoryId1, setReviewCategoryId1] = useState()
  const [reviewCategoryId2, setReviewCategoryId2] = useState()
  const [reviewCategoryId3, setReviewCategoryId3] = useState()
  const [reviewCategoryId4, setReviewCategoryId4] = useState()
  const [reviewCategoryId5, setReviewCategoryId5] = useState()

  const handleChange = (e) => {
    setSearchKeyWord(e.target.value)
  }

  const handleSubmit1 = () => {
    setReviewCategoryId1(1)
    console.log(reviewCategoryId1)

    const body = {
      review: {
        user_id: 1,
        company_id: companyInformation.companies[0].id,
        review_category_id: reviewCategoryId1,
        review_content: content1,
      },
    }
    console.log(companyInformation, reviewCategoryId1, body)
    const headers = { 'Content-Type': 'application/json' }
    axios
      .post(reviewsNew, body, headers)
      .then((response) => {
        console.log('success', response)
        alert('レポート投稿が成功しました')
      })
      .catch((error) => {
        console.log('failed', error)
        alert('投稿に失敗しました')
      })
  }
  const handleSubmit2 = () => {
    setReviewCategoryId2(2)
    console.log(reviewCategoryId2)

    const body = {
      review: {
        user_id: 1,
        company_id: companyInformation.companies[0].id,
        review_category_id: reviewCategoryId2,
        review_content: content2,
      },
    }
    console.log(companyInformation, reviewCategoryId2, body)
    const headers = { 'Content-Type': 'application/json' }
    axios
      .post(reviewsNew, body, headers)
      .then((response) => {
        console.log('success', response)
        alert('レポート投稿が成功しました')
      })
      .catch((error) => {
        console.log('failed', error)
        alert('投稿に失敗しました')
      })
  }
  const handleSubmit3 = () => {
    setReviewCategoryId3(3)
    console.log(reviewCategoryId3)

    const body = {
      review: {
        user_id: 1,
        company_id: companyInformation.companies[0].id,
        review_category_id: reviewCategoryId3,
        review_content: content3,
      },
    }
    console.log(companyInformation, reviewCategoryId3, body)
    const headers = { 'Content-Type': 'application/json' }
    axios
      .post(reviewsNew, body, headers)
      .then((response) => {
        console.log('success', response)
        alert('レポート投稿が成功しました')
      })
      .catch((error) => {
        console.log('failed', error)
        alert('投稿に失敗しました')
      })
  }
  const handleSubmit4 = () => {
    setReviewCategoryId4(4)
    console.log(reviewCategoryId4)

    const body = {
      review: {
        user_id: 1,
        company_id: companyInformation.companies[0].id,
        review_category_id: reviewCategoryId4,
        review_content: content4,
      },
    }
    console.log(companyInformation, reviewCategoryId4, body)
    const headers = { 'Content-Type': 'application/json' }
    axios
      .post(reviewsNew, body, headers)
      .then((response) => {
        console.log('success', response)
        alert('レポート投稿が成功しました')
      })
      .catch((error) => {
        console.log('failed', error)
        alert('投稿に失敗しました')
      })
  }
  const handleSubmit5 = () => {
    setReviewCategoryId5(5)
    console.log(reviewCategoryId5)

    const body = {
      review: {
        user_id: 1,
        company_id: companyInformation.companies[0].id,
        review_category_id: reviewCategoryId5,
        review_content: content5,
      },
    }
    console.log(companyInformation, reviewCategoryId5, body)
    const headers = { 'Content-Type': 'application/json' }
    axios
      .post(reviewsNew, body, headers)
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
            value={content1}
            onChange={(event) => setContent1(event.target.value)}
          />
          <button onClick={handleSubmit1} type="button">
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
          <button onClick={handleSubmit2} type="button">
            レポートを投稿する
          </button>
        </form>
        <h4>働きがい/成長</h4>
        <form>
          <textarea
            name="Motivation"
            value={content3}
            onChange={(event) => setContent3(event.target.value)}
          />
          <button onClick={handleSubmit3} type="button">
            レポートを投稿する
          </button>
        </form>
        <h4>退職理由</h4>
        <form>
          <textarea
            name="LeaveReason"
            value={content4}
            onChange={(event) => setContent4(event.target.value)}
          />
          <button onClick={handleSubmit4} type="button">
            レポートを投稿する
          </button>
        </form>
        <h4>給与体系</h4>
        <form>
          <textarea
            name="LeaveReason"
            value={content5}
            onChange={(event) => setContent5(event.target.value)}
          />
          <button onClick={handleSubmit5} type="button">
            レポートを投稿する
          </button>
        </form>
      </body>
    </>
  )
}

import React, { useState } from 'react'
import axios from 'axios'
import { reviewCategoriesNew } from '../../urls/index'

export const ReviewCategoiresNew = () => {
  const [name, setName] = useState('')

  const handleSubmit = () => {
    const body = {
      reviewCategory: {
        name,
      },
    }
    const headers = { 'Content-Type': 'application/json' }
    axios
      .post(reviewCategoriesNew, body, headers)
      .then((response) => {
        console.log('success', response)
        alert('登録が成功しました')
      })
      .catch((error) => {
        console.log('failed', error)
        alert('登録が失敗しました')
      })
  }

  return (
    <>
      <p>新規登録</p>
      <form>
        <input
          type="text"
          value={name}
          placeholder="カテゴリー名"
          onChange={(event) => setName(event.target.value)}
        />
        <button onClick={handleSubmit} type="button">
          登録する
        </button>
      </form>
    </>
  )
}

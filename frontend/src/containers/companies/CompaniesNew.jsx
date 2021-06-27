import React, { useState } from 'react'
import axios from 'axios'
import { companiesNew } from '../../urls/index'

export const CompaniesNew = () => {
  const [name, setName] = useState('')

  const handleSubmit = () => {
    const body = {
      company: {
        name,
      },
    }
    const headers = { 'Content-Type': 'application/json' }
    axios
      .post(companiesNew, body, headers)
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
          placeholder="企業名"
          onChange={(event) => setName(event.target.value)}
        />
        <button onClick={handleSubmit} type="button">
          登録する
        </button>
      </form>
    </>
  )
}

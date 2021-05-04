import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { usersEdit, usersShow } from '../../urls/index'

import { Header } from '../../components/Header'
import './users.css'

const initialState = {
  user: {
    id: null,
    name: '',
    email: '',
    birthday: null,
    salary: null,
  },
}
export const UsersEdit = ({ match }) => {
  const [userInformation, setUserInformation] = useState(initialState)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [birthday, setBirthday] = useState('')
  const [salary, setSalary] = useState('')

  const fetchUsersShow = (id) =>
    axios
      .get(usersShow(id))
      .then((response) => response.data)
      .catch((error) => console.error(error))

  useEffect(() => {
    fetchUsersShow(match.params.id).then(
      (data) => setUserInformation(data),
      console.log({ userInformation })
    )
  }, [])

  const handleSubmit = () => {
    const header = { 'Content-Type': 'application/json' }
    const body = {
      user: {
        name,
        email,
        birthday,
        salary,
      },
    }
    axios
      .patch(usersEdit, header, body, { withCredentials: true })
      .then((response) => {
        console.log('success', response)
      })
      .catch((error) => {
        console.log('failed', error)
      })
  }

  return (
    <>
      <Header />
      <body>
        <div className="mainWrapper">
          <h2>ユーザー情報</h2>
          <table className="userShowTable">
            <tr>
              <th>氏名</th>
              <td>
                <input
                  type="text"
                  value={name}
                  placeholder="氏名"
                  onChange={(event) => setName(event.target.value)}
                  className="placeholderPosition"
                />
              </td>
            </tr>
            <tr>
              <th>メールアドレス</th>
              <td>
                <input
                  type="email"
                  value={email}
                  placeholder="メールアドレス"
                  onChange={(event) => setEmail(event.target.value)}
                  className="placeholderPosition"
                />
              </td>
            </tr>
            <tr>
              <th>生年月日</th>
              <td>
                <input
                  type="date"
                  value={birthday}
                  onChange={(event) => setBirthday(event.target.value)}
                  className="placeholderPosition"
                />
              </td>
            </tr>
            <tr>
              <th>現在の年収</th>
              <td>
                <select
                  value={salary}
                  onChange={(event) => setSalary(event.target.value)}
                >
                  <option value="" className="placeholderPosition">
                    選択してください
                  </option>
                  <option value="〜300">300万円未満</option>
                  <option value="300〜500">300万円〜500万円</option>
                  <option value="750〜1000万円">750万円〜1000万円</option>
                  <option value="1000万円〜1250万円">1000万円〜1250万円</option>
                  <option value="1250万円〜1500万円">1250万円〜1500万円</option>
                  <option value="1500万円〜">1500万円以上</option>
                </select>
              </td>
            </tr>
          </table>
          <button className="edit-btn" onClick={handleSubmit} type="button">
            更新する
          </button>
        </div>
      </body>
    </>
  )
}

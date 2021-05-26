import React, { useState, useContext, useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../auth/AuthProvider'
import { Context } from '../../store'
import { usersNew } from '../../urls/index'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import './users.css'

export const UsersNew = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [birthday, setBirthday] = useState('')
  const [salary, setSalary] = useState('')

  const history = useHistory()
  const { state, dispatch } = useContext(Context)
  const { signup } = useContext(AuthContext)

  // const handleTest = () => {
  //   console.log(`before${state.id}`)
  //   dispatch({ type: 'setId', payload: 1 })
  //   console.log(`after${state}`)
  //   // history.push(`/users/1`)
  // }
  const handleSubmit = async () => {
    await signup(email, password, history)
    const headers = { 'Content-Type': 'application/json' }
    const body = {
      user: {
        name: name,
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
        birthday: birthday,
        salary: salary,
      },
    }
    axios
      .post(usersNew, body, headers, { withCredentials: true })
      .then((response) => {
        if (response.data.status === 'created') {
          const id = response.data.user.id
          dispatch({ type: 'setId', payload: id })
          history.push(`/users/${id}`)
        }
      })
      .catch((error) => {
        console.log('failed', error)
      })
  }

  return (
    <>
      <body>
        <Header />
        <div className="mainWrapper">
          <h2>新規登録</h2>
          <p>
            基本情報<span className="asterisk"> ＊</span>
            <span className="vital"> 必須</span>
          </p>
          <form>
            <table className="newForm">
              <tr>
                <th>
                  氏名<span className="asterisk"> *</span>
                </th>
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
                <th>
                  メールアドレス<span className="asterisk"> *</span>
                </th>
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
                <th>
                  パスワード<span className="asterisk"> *</span>
                </th>
                <td>
                  <input
                    type="password"
                    value={password}
                    placeholder="8文字以上でご入力下さい"
                    onChange={(event) => setPassword(event.target.value)}
                    className="placeholderPosition"
                  />
                </td>
              </tr>
              <tr>
                <th>
                  確認用パスワード<span className="asterisk"> *</span>
                </th>
                <td>
                  <input
                    type="password"
                    value={passwordConfirmation}
                    placeholder="再度ご入力下さい"
                    onChange={(event) =>
                      setPasswordConfirmation(event.target.value)
                    }
                    className="placeholderPosition"
                  />
                </td>
              </tr>
              <tr>
                <th>
                  生年月日<span className="asterisk"> *</span>
                </th>
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
                <th>
                  現在の年収<span className="asterisk"> *</span>
                </th>
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
                    <option value="750〜1000">750万円〜1000万円</option>
                    <option value="1000〜1250">1000万円〜1250万円</option>
                    <option value="1250〜1500">1250万円〜1500万円</option>
                    <option value="1500〜">1500万円以上</option>
                  </select>
                </td>
              </tr>
            </table>
            <button
              className="register-btn"
              onClick={handleSubmit}
              type="button"
            >
              登録する
            </button>
            {/* <button className="register-btn" onClick={handleTest} type="button">
              testする
            </button> */}
          </form>
        </div>
        {/* <Footer /> */}
      </body>
    </>
  )
}

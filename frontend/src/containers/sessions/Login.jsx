import React, { useState, useContext } from 'react'
import { AuthContext } from '../../auth/AuthProvider'
import './sessions.css'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { login } from '../../urls/index'
import { Context } from '../../store'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const { state, dispatch } = useContext(Context)
  const { loginFirebase } = useContext(AuthContext)

  const handleSubmit = () => {
    loginFirebase(email, password, history)
    const body = {
      user: {
        email,
        password,
      },
    }
    const headers = { 'Content-Type': 'application/json' }
    axios
      .post(login, body, headers, { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          const id = response.data.user.id
          console.log(id)
          dispatch({ type: 'setId', payload: id })
        }
      })
      .catch((error) => {
        console.log('failed', error)
      })
  }

  return (
    <>
      <h2>ログイン</h2>
      <form>
        <div className="login-form">
          <table className="login-table">
            <tr className="login-tr">
              <th className="login-th">
                メールアドレス<span className="asterisk"> *</span>
              </th>
              <td className="login-td">
                <input
                  type="email"
                  value={email}
                  placeholder="メールアドレス"
                  onChange={(event) => setEmail(event.target.value)}
                  className="login-input"
                />
              </td>
            </tr>
            <tr className="login-tr">
              <th className="login-th">
                パスワード<span className="asterisk"> *</span>
              </th>
              <td className="login-td">
                <input
                  className="login-input"
                  type="password"
                  value={password}
                  placeholder="8文字以上でご入力下さい"
                  onChange={(event) => setPassword(event.target.value)}
                  className="login-input"
                />
              </td>
            </tr>
          </table>
        </div>
        <button className="login-btn" onClick={handleSubmit} type="button">
          ログイン
        </button>
      </form>
    </>
  )
}

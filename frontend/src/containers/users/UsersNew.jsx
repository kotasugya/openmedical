import React, {Fragment, useReducer, useEffect, useState} from 'react';
import axios from 'axios'
import {usersNew} from '../../urls/index'
import {useHistory} from 'react-router-dom'
import './users.css'


export const UsersNew = () =>{
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [birthday, setBirthday] = useState("")
  const [salary, setSalary] = useState("")

  const history = useHistory();

  const handleSubmit = () =>{
    const body = {
      user:{
        name: name,
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
        birthday: birthday,
        salary: salary
      }
    }
    const headers = {"Content-Type": "application/json"}
    axios.post(usersNew,
                body,
                headers,
                { withCredentials: true }
      ).then(response => {
          console.log("success", response);
          const userId = response.data.user.id
          history.push(`/users/${userId}`)
      }).catch(error => {
          console.log("failed", error);
      })
  }

  return(
    <Fragment>
      <h2>新規登録</h2>
      <p>基本情報</p>
        <form className = "form">
          <table>
            <tr>
              <th>氏名</th>
              <th>
                <input
                  type="text"
                  value={name}
                  placeholder="氏名"
                  onChange={event => setName(event.target.value)}
                />
              </th>
            </tr>
            <tr>
              <th>メールアドレス</th>
              <th>
                <input
                  type="email"
                  value={email}
                  placeholder="メールアドレス"
                  onChange={event => setEmail(event.target.value)}
                />
              </th>
            </tr>
            <tr>
              <th>パスワード</th>
              <th>
                <input
                  type="password"
                  value={password}
                  placeholder="パスワード"
                  onChange={event => setPassword(event.target.value)}
                />
              </th>
            </tr>
            <tr>
              <th>確認用パスワード</th>
              <th>
                <input
                  type="password"
                  value={passwordConfirmation}
                  placeholder="確認用パスワード"
                  onChange={event => setPasswordConfirmation(event.target.value)}
                />
              </th>
            </tr>
            <tr>
              <th>誕生日</th>
              <th>
                <input
                  type="date"
                  value={birthday}
                  onChange={event => setBirthday(event.target.value)}
                />
              </th>
            </tr>
            <tr>
              <th>現在の年収</th>
              <th>
                <select
                  value={salary}
                  onChange={event => setSalary(event.target.value)}
                  placeholder="選択して下さい。"
                >
                  <option value="選択肢1">選択肢1</option>
                  <option value="選択肢2">選択肢2</option>
                  <option value="選択肢3">選択肢3</option>
                </select>
              </th>
            </tr>
          </table>
          <button onClick = {handleSubmit} type = "button" >登録する</button>
        </form>
    </Fragment>
  )
}
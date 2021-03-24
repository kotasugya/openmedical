import React, {Fragment, useReducer, useEffect, useState} from 'react';
import axios from 'axios'
import {usersNew} from '../../urls/index'
import {useHistory} from 'react-router-dom'


export const UsersNew = () =>{
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [birthday, setBirthday] = useState("")

  const history = useHistory();

  const handleSubmit = () =>{
    const body = {
      user:{
        name: name,
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
        birthday: birthday
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
      <p>新規登録</p>
        <form>
          <input
            type="text"
            value={name}
            placeholder="氏名"
            onChange={event => setName(event.target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder="メールアドレス"
            onChange={event => setEmail(event.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="パスワード"
            onChange={event => setPassword(event.target.value)}
          />
          <input
            type="password"
            value={passwordConfirmation}
            placeholder="確認用パスワード"
            onChange={event => setPasswordConfirmation(event.target.value)}
          />
          <input
            type="date"
            value={birthday}
            onChange={event => setBirthday(event.target.value)}
          />

          <button onClick = {handleSubmit} type = "button" >登録する</button>
        </form>
    </Fragment>
  )
}
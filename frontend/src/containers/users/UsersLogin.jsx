import React, {Fragment, useReducer, useEffect, useState} from 'react';
import axios from 'axios'
import {usersLogin} from '../../urls/index'

export const UsersLogin = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () =>{
    const headers = "Content-Type: application/json"
    axios.post(usersLogin,{user:{
                            email: email,
                            password: password}},
                            headers
      ).then(response => {
          // if(response.logged_in){
          //   props.handleLoginOk(response.user)
          // }
        console.log(response.data)
      }).catch(error => {
          console.log("failed", error);
      })
  }
  return(
    <Fragment>
      <p>ログイン</p>
        <form onSubmit = {handleSubmit}>
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

          <button type="submit">ログインする</button>
        </form>
    </Fragment>
  )
}

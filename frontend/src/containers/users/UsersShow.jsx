import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios'
import { usersShow } from '../../urls/index';
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import './users.css'


const initialState = {
  "user":{
    "id":null,
    "name":"",
    "email":"",
    "birthday":null,
    "salary":null,
  }
}
export const UsersShow = () => {
  const [userInformation, setUserInformation] = useState(initialState)

  const fetchUsersShow = (id) => {
    return axios.get(usersShow(id))
    .then(response => {
      return response.data
    })
    .catch((error) => console.error(error))
  }

  useEffect(() => {
    fetchUsersShow(1)
    .then((data) =>
      setUserInformation(data),
      console.log({userInformation})
    )
  }, [])

  return(
    <Fragment>
      <body>
        <Header/>
          <div className = "mainWrapper">
            <h2>ユーザー情報</h2>
            <table className = "userShowTable">
              <tr>
                <th>氏名</th>
                <td>{userInformation.user.name}</td>
              </tr>
              <tr>
                <th>メールアドレス</th>
                <td>{userInformation.user.email}</td>
              </tr>
              <tr>
                <th>生年月日</th>
                <td>{userInformation.user.birthday}</td>
              </tr>
              <tr>
                <th>現在の年収</th>
                <td>{userInformation.user.salary}</td>
              </tr>
            </table>
            <button className = "edit-btn" type = "button" >編集する</button>
          </div>
        <Footer/>
      </body>
    </Fragment>
  )
}
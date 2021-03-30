import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios'
import { usersEdit } from '../../urls/index';
import {Header} from '../../components/Header'
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
export const UsersEdit = () => {
  const [userInformation, setUserInformation] = useState(initialState)
  const [name, setName] = useState({userInformation.user.name})
  const [email, setEmail] = useState({userInformation.user.email})
  const [birthday, setBirthday] = useState({userInformation.user.birthday})
  const [salary, setSalary] = useState({userInformation.user.salary})

  const fetchUsersShow = (id) => {
    return axios.get(usersShow(id))
    .then(response => {
      return response.data
    })
    .catch((error) => console.error(error))
  }

  const handleSubmit = () =>{
      const body = {
        user:{
          name: name,
          email: email,
          birthday: birthday,
          salary: salary
        }
      }
    const header = {"Content-Type": "application/json"}
    axios.patch(usersEdit,
                body,
                headers,
                { withCredentials: true }
      ).then(response => {
          console.log("success", response);
      }).catch(error => {
          console.log("failed", error);
      })
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
      <Header/>
      <body>
        <div className = "mainWrapper">
          <h2>ユーザー情報</h2>
          <table className = "userShowTable">
            <tr>
              <th>氏名</th>
              <td>
                <input
                    type="text"
                    value={name}
                    placeholder="氏名"
                    onChange={event => setName(event.target.value)}
                    className = "placeholderPosition"
                  />
                {userInformation.user.name}
              </td>
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
          <button className = "edit-btn" onClick = {handleSubmit} type = "button" >編集する</button>
        </div>
      </body>
    </Fragment>
  )
}
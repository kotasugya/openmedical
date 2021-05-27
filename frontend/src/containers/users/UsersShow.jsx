import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import './users.css'
import { Link } from 'react-router-dom'
import { usersShow } from '../../urls/index'
import { Context } from '../../store'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

const initialState = {
  user: {
    id: null,
    name: '',
    email: '',
    birthday: null,
    salary: null,
  },
}
export const UsersShow = ({ match }) => {
  const [userInformation, setUserInformation] = useState(initialState)
  const { state } = useContext(Context)
  console.log(`state:${state.id}`)
  const fetchUsersShow = (id) =>
    axios
      .get(usersShow(id), { withCredentials: true })
      .then((response) => response.data)
      .catch((error) => console.error(error))

  useEffect(() => {
    fetchUsersShow(match.params.id).then((data) => setUserInformation(data))
  }, [])

  return (
    <>
      <body>
        <Header />
        <div className="mainWrapper">
          <h2>ユーザー情報</h2>
          <table className="userShowTable">
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
          <button className="edit-btn" type="button">
            <Link to={`${userInformation.user.id}/edit`}>編集する</Link>
          </button>
        </div>
        <Footer />
      </body>
    </>
  )
}

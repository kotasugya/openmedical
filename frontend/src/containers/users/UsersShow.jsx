import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import './users.css'
import { useHistory } from 'react-router-dom'
import { usersShow } from '../../urls/index'
import { Context } from '../../store'

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
  const history = useHistory()
  const { state } = useContext(Context)
  console.log(`state:${state.id}`)

  const handleEdit = () => {
    history.push(`${userInformation.user.id}/edit`)
  }

  const fetchUsersShow = (id) =>
    axios
      .get(usersShow(id))
      .then((response) => response.data)
      .catch((error) => console.error(error))

  useEffect(() => {
    fetchUsersShow(match.params.id).then((data) => setUserInformation(data))
  }, [])

  return (
    <>
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
      <button className="edit-btn" type="button" onClick={handleEdit}>
        編集する
      </button>
    </>
  )
}

import React, {Fragment, useReducer, useEffect, useState} from 'react';
import axios from 'axios'
import { usersShow } from '../../urls/index';

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
      {userInformation.user.email}
    </Fragment>
  )
}
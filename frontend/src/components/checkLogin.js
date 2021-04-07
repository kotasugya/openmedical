// import React, {useState} from 'react';
// import axios from 'react'
// import { usersCheckLogin } from '../urls';

// export const CheckLoginStatus = () => {
//   const [user, setUser] = useState()
//   axios.get(usersCheckLogin, { withCredentials: true })

//     .then(response => {
//     if (response.data.logged_in){
//       setUser(response.data.user)
//     }
//     else if (!response.data.logged_in){
//       setUser({})
//     }
//   }).catch(error => {
//     console.log("ログインエラー", error)
//   })
// }
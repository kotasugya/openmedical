// import React, {Fragment, useState, useEffect} from 'react';
// import axios from 'axios'
// import {useHistory} from 'react-router-dom'
// import {usersLogin} from '../../urls/index'

// export const UsersLogin = () => {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   const history = useHistory();

//   const handleSubmit = () =>{
//     const headers = {"Content-Type": "application/json"}
//     const body = {
//       user:{
//         email: email,
//         password: password
//       }
//     }
//     axios.post(usersLogin,
//                 body,
//                 headers,
//       ).then(response => {
//         if (response.data.logged_in) {
//           const userId = response.data.user.id
//           document.cookie = `user_id=${userId}`
//           history.push(`/users/${userId}`)
//         }
//       }).catch(error => {
//           console.log("failed", error);
//       })
//   }
//   return(
//     <Fragment>
//       <p>ログイン</p>
//         <form>
//           <input
//             type="email"
//             value={email}
//             placeholder="メールアドレス"
//             onChange={event => setEmail(event.target.value)}
//           />
//           <input
//             type="password"
//             value={password}
//             placeholder="パスワード"
//             onChange={event => setPassword(event.target.value)}
//           />
//           <button onClick = {handleSubmit} type = "button" >ログインする</button>
//         </form>
//     </Fragment>
//   )
// }

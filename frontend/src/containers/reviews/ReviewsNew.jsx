import React, {Fragment, useReducer, useEffect, useState} from 'react';
import axios from 'axios'
import {reviewsNew} from '../../urls/index'


export const ReviewsNew = () =>{
  const [content, setContent] = useState("")

  const handleSubmit = () =>{
    const body = {
      review:{
        reviewContent: content
      }
    }
    const headers = {"Content-Type": "application/json"}
    axios.post(reviewsNew(1),
                body,
                headers,
                { withCredentials: true }
      ).then(response => {
          console.log("success", response);
          alert("レポート投稿が成功しました")
      }).catch(error => {
          console.log("failed", error);
          alert("投稿に失敗しました")
      })
  }

  return(
    <Fragment>
      <h4>組織体制 / 企業文化</h4>
      <form>
          <textarea
            name = "companyCulture"
            value={content}
            onChange={event => setContent(event.target.value)}
          />
          <button onClick = {handleSubmit} type = "button" >レポートを投稿する</button>
      </form>
    </Fragment>
  )
}
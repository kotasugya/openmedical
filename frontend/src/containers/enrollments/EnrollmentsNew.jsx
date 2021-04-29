import React, {Fragment, useReducer, useEffect, useState} from 'react';
import axios from 'axios'
import {enrollmentsNew} from '../../urls/index'


export const EnrollmentsNew = () =>{
  const [employmentStatus, setEmploymentStatus] = useState("")
  const [workingNowOrNot, setWorkingNowOrNot] = useState("")
  const [joinYear, setJoinYear] = useState("")
  const [leaveYear, setLeaveYear] = useState("")
  const [occupation, setOccupation] = useState("")

  const handleSubmit = () =>{
    const body = {
      company:{
        employmentStatus: employmentStatus,
        workingNowOrNot: workingNowOrNot,
        joinYear: joinYear,
        leaveYear: leaveYear,
        occupation: occupation
      }
    }
    const headers = {"Content-Type": "application/json"}
    axios.post(enrollmentsNew,
                body,
                headers,
                { withCredentials: true }
      ).then(response => {
          console.log("success", response);
          alert("登録が完了しました")
      }).catch(error => {
          console.log("failed", error);
          alert("登録出来ませんでした")
      })
  }

  return(
    <Fragment>
      <h3>在籍情報</h3>
      <form>
          <input
            type="radio"
            value={employmentStatus}
            onChange={event => setEmploymentStatus(event.target.value)}
          />常勤
          <input
            type="radio"
            value={employmentStatus}
            onChange={event => setEmploymentStatus(event.target.value)}
          />非常勤
          <input
            type="radio"
            value={workingNowOrNot}
            onChange={event => setWorkingNowOrNot(event.target.value)}
          />現職
          <input
            type="radio"
            value={workingNowOrNot}
            onChange={event => setWorkingNowOrNot(event.target.value)}
          />退職済み
          <input
            type="month"
            value={joinYear}
            onChange={event => setJoinYear(event.target.value)}
          />入社年
          <input
            type="month"
            value={leaveYear}
            onChange={event => setLeaveYear(event.target.value)}
          />退職年
          <input
            type="text"
            value={occupation}
            onChange={event => setOccupation(event.target.value)}
          />職種

          <button onClick = {handleSubmit} type = "button">登録する</button>
      </form>
    </Fragment>
  )
}
import React, { Fragment, useReducer, useEffect, useState } from 'react'
import axios from 'axios'
import { enrollmentsNew } from '../../urls/index'

export const EnrollmentsNew = (props) => {
  const [employmentStatus, setEmploymentStatus] = useState('')
  const [workingNowOrNot, setWorkingNowOrNot] = useState('')
  const [joinYear, setJoinYear] = useState('')
  const [leaveYear, setLeaveYear] = useState('')
  const [occupation, setOccupation] = useState('')

  const handleSubmit = () => {
    const headers = { 'Content-Type': 'application/json' }
    const body = {
      enrollment: {
        employment_status: employmentStatus,
        working_now_or_not: workingNowOrNot,
        join_year: joinYear,
        leave_year: leaveYear,
        occupation: occupation,
      },
    }
    axios
      .post(
        enrollmentsNew(props.companyInformation.companies[0].id),
        body,
        headers,
        { withCredentials: true }
      )
      .then((response) => {
        console.log('success', response)
        alert('登録が完了しました')
      })
      .catch((error) => {
        console.log('failed', error)
        alert('登録出来ませんでした')
      })
  }

  return (
    <>
      <h3>在籍情報</h3>
      <form>
        <table>
          <tr>
            <th>雇用形態</th>
            <td>
              <select
                value={employmentStatus}
                onChange={(event) => setEmploymentStatus(event.target.value)}
              >
                <option value="" className="placeholderPosition">
                  選択してください
                </option>
                <option value="非常勤">非常勤</option>
                <option value="常勤">常勤</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>在籍状況</th>
            <td>
              <select
                value={workingNowOrNot}
                onChange={(event) => setWorkingNowOrNot(event.target.value)}
              >
                <option value="" className="placeholderPosition">
                  選択してください
                </option>
                <option value="現職">現職中</option>
                <option value="退職済み">退職済み</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>入社年</th>
            <td>
              <input
                type="month"
                value={joinYear}
                onChange={(event) => setJoinYear(event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>退職年</th>
            <td>
              <input
                type="month"
                value={leaveYear}
                onChange={(event) => setLeaveYear(event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>職種</th>
            <td>
              <input
                type="text"
                value={occupation}
                onChange={(event) => setOccupation(event.target.value)}
              />
            </td>
          </tr>
        </table>
        <button onClick={handleSubmit} type="button">
          登録する
        </button>
      </form>
    </>
  )
}

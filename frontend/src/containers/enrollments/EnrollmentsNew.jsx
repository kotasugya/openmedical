import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import './enrollments.css'
import { enrollmentsNew } from '../../urls/index'

export const EnrollmentsNew = (props) => {
  const [employmentStatus, setEmploymentStatus] = useState('')
  const [workingNowOrNot, setWorkingNowOrNot] = useState('')
  const [joinYear, setJoinYear] = useState('')
  const [leaveYear, setLeaveYear] = useState('')
  const [occupation, setOccupation] = useState('')
  const history = useHistory()

  const handleSubmit = () => {
    const headers = { 'Content-Type': 'application/json' }
    const body = {
      enrollment: {
        user_id: 2,
        company_id: props.companyInformation.id,
        employment_status: employmentStatus,
        working_now_or_not: workingNowOrNot,
        join_year: joinYear,
        leave_year: leaveYear,
        occupation: occupation,
      },
    }
    axios
      .post(enrollmentsNew(props.companyInformation.id), body, headers, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.status === 'created') {
          alert('登録が完了しました')
          history.push({
            pathname: `/reviews/new`,
            state: {
              companyId: props.companyInformation.id,
              enrollmentId: response.data.enrollment.id,
            },
          })
        }
      })
      .catch((error) => {
        const errors = error.response.data.errors
        if (errors) {
          alert(errors)
        } else {
          alert('エラーが発生しました')
        }
        // console.log(error.response.data.errors)
        // alert(error.response.data.errors)
      })
  }

  return (
    <>
      <body>
        <div className="mainWrapper">
          <h3>在籍情報 (STEP1)</h3>
          <form className="enrollmentTable">
            <table className="newForm">
              <tr>
                <th>雇用形態</th>
                <td>
                  <select
                    value={employmentStatus}
                    onChange={(event) =>
                      setEmploymentStatus(event.target.value)
                    }
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
            <button
              className="register-btn"
              onClick={handleSubmit}
              type="button"
            >
              登録して次へ進む
            </button>
          </form>
        </div>
      </body>
    </>
  )
}

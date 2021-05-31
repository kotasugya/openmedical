import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import './enrollments.css'
import { enrollmentsNew } from '../../urls/index'
import { Context } from '../../store'

export const EnrollmentsNew = (props) => {
  const history = useHistory()
  const [employmentStatus, setEmploymentStatus] = useState('')
  const [workingNowOrNot, setWorkingNowOrNot] = useState('')
  const [joinYear, setJoinYear] = useState('')
  const [leaveYear, setLeaveYear] = useState('')
  const [occupation, setOccupation] = useState('')
  const { state } = useContext(Context)
  console.log(`state:${JSON.stringify(state)}`)

  // 検索から登録する場合
  if (props.companyInformation) {
    const searchedCompanyId = props.companyInformation.id
    console.log(searchedCompanyId)
  }

  // 企業詳細ページから登録する場合
  if (location.state) {
    const { location } = props
    const companyId = location.state.companyId
    console.log(companyId)
  }

  const handleSubmit = () => {
    const headers = { 'Content-Type': 'application/json' }
    const body = {
      enrollment: {
        user_id: state.id,
        company_id: searchedCompanyId || companyId,
        employment_status: employmentStatus,
        working_now_or_not: workingNowOrNot,
        join_year: joinYear,
        leave_year: leaveYear,
        occupation: occupation,
      },
    }
    axios
      .post(
        enrollmentsNew(props.companyInformation.id || companyId),
        body,
        headers,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.data.status === 'created') {
          alert('登録が完了しました')
          history.push({
            pathname: `/reviews/new`,
            state: {
              companyId: props.companyInformation.id || companyId,
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
      })
  }

  return (
    <>
      <h3>
        在籍情報 (STEP1)<span className="enrollmentAsterisk">※</span>
      </h3>
      <form className="enrollmentTable">
        <table className="enrollmentNewForm">
          <tr>
            <th className="enrollment-th">雇用形態</th>
            <td className="enrollment-td">
              <select
                className="enrollment-select"
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
            <th className="enrollment-th">在籍状況</th>
            <td className="enrollment-td">
              <select
                className="enrollment-select"
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
            <th className="enrollment-th">入社年</th>
            <td className="enrollment-td">
              <input
                className="enrollment-select"
                type="month"
                value={joinYear}
                onChange={(event) => setJoinYear(event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th className="enrollment-th">退職年</th>
            <td className="enrollment-td">
              <input
                className="enrollment-select"
                type="month"
                value={leaveYear}
                onChange={(event) => setLeaveYear(event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th className="enrollment-th">職種</th>
            <td className="enrollment-td">
              <input
                className="enrollment-select"
                type="text"
                value={occupation}
                onChange={(event) => setOccupation(event.target.value)}
              />
            </td>
          </tr>
        </table>
        <button
          className="enrollment-register-btn"
          onClick={handleSubmit}
          type="button"
        >
          登録して次へ進む
        </button>
      </form>
    </>
  )
}

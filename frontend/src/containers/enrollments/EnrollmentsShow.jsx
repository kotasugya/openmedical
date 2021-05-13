import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { enrollmentsShow } from '../../urls/index'
import './enrollments.css'

const enrollmentInitialState = {
  enrollment: {
    user_id: null,
    company_id: null,
    employment_status: '',
    working_now_or_not: '',
    join_year: '',
    leave_year: '',
    occupation: '',
  },
}

export const EnrollmentsShow = (props) => {
  const { companyId, enrollmentId } = props
  console.log(companyId, enrollmentId)
  const [enrollmentInformation, setEnrollmentInformation] = useState(
    enrollmentInitialState
  )

  const fetchEnrollmentsShow = () =>
    axios
      .get(enrollmentsShow(companyId, enrollmentId), { withCredentials: true })
      .then((response) => response.data)
      .catch((error) => console.error(error))

  useEffect(() => {
    if (enrollmentId != null) {
      fetchEnrollmentsShow().then(
        (data) => setEnrollmentInformation(data),
        console.log({ enrollmentInformation })
      )
    }
  }, [])

  return (
    <div className="enrollments-information">
      <span>回答者：</span>
      {enrollmentInformation.enrollment.employment_status}、
      {enrollmentInformation.enrollment.working_now_or_not}、
      {enrollmentInformation.enrollment.join_year}、
      {enrollmentInformation.enrollment.occupation}
      <br />
      <br />
    </div>
  )
}

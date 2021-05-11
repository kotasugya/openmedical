import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { enrollmentsShow } from '../../urls/index'

const enrollmentInitialState = {
  enrollment: {
    id: null,
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
  const [enrollmentInformation, setEnrollmentInformation] = useState(
    enrollmentInitialState
  )

  const fetchEnrollmentsShow = (companyId, id) =>
    axios
      .get(enrollmentsShow(companyId, id), { withCredentials: true })
      .then((response) => response.data)
      .catch((error) => console.error(error))

  useEffect(() => {
    fetchEnrollmentsShow(props.companyId, props.id).then(
      (data) => setEnrollmentInformation(data),
      console.log({ enrollmentInformation })
    )
  }, [])

  return (
    <div className="enrollments-information">
      回答者：{enrollmentInformation.enrollment.employment_status}
    </div>
  )
}

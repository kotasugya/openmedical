import React, {useEffect, useState} from 'react'

const enrollmentInitialState = {
    enrollment: {
      id: null,
      user_id: null,
      company_id: null,
      employment_status: "",
      working_now_or_not: "",
      join_year: "",
      leave_year: "",
      occupation: ""
    },
  }

export const EnrollmentsShow = () =>{
const [enrollmentInformation, setEnrollmentInformation] = useState(enrollmentInitialState)
  const fetchEnrollmentsShow = (id) =>
    axios
      .get(enrollmentsShow(id), { withCredentials: true })
      .then((response) => response.data)
      .catch((error) => console.error(error))

  return(

  )
}
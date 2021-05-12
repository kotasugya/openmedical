import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { companiesIndex } from '../../urls/index'
import { reviewCategoriesIndex } from '../../urls/index'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

const initialState = {
  companies: [
    {
      id: null,
      name: '',
    },
  ],
}

export const CompaniesIndex = () => {
  const [companyList, setCompanyList] = useState(initialState)

  const fetchCompaniesIndex = () =>
    axios
      .get(companiesIndex)
      .then((response) => response.data)
      .catch((error) => console.error(error))

  useEffect(() => {
    fetchCompaniesIndex().then(
      (data) => setCompanyList(data),
      console.log({ companyList })
    )
  }, [])

  return (
    <>
      <body>
        <Header />
        <div className="mainWrapper">
          <h2>医療機関一覧</h2>
          {companyList.companies.map((company, i) => (
            <table>
              <tr>
                <td className="companyName">
                  <Link to={`companies/${company.id}`}>{company.name}</Link>
                </td>
                <td className="reviews">
                  <Link to={reviewCategoriesIndex}>レビュー数</Link>
                </td>
                <td className="follow-btn">
                  <button>フォローする</button>
                </td>
              </tr>
            </table>
          ))}
        </div>
        <Footer />
      </body>
    </>
  )
}

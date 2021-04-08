import React, {Fragment ,useEffect, useState} from 'react';
import axios from 'axios'
import {useHistory, Link} from 'react-router-dom'
import {companiesIndex} from '../../urls/index'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'


const initialState = {
  "companies":[
    {
      "id":null,
      "name":""
    }
  ]
}

export const CompaniesIndex = () =>{
  const [companiesList, setCompaniesList] = useState(initialState)
  const history = useHistory();

  const fetchCompaniesIndex = () =>{
    return axios.get(companiesIndex)
    .then(response => {
      return response.data
    })
    .catch((error) => console.error(error))
  }

  useEffect(() => {
    fetchCompaniesIndex()
    .then((data) =>
      setCompaniesList(data),
      console.log({companiesList})
    )
  }, [])

  return(
    <Fragment>
      <body>
        <Header/>
          <div className = "mainWrapper">
            <h2>医療機関一覧</h2>
            {companiesList.companies.map((company, i) =>
              <table>
                <tr>
                  <th>{i}</th>
                  <td className = "companyName">
                    <Link to = {`companies/${company.id}`}>
                      {company.name}
                    </Link>
                  </td>
                  <td className = "reviews">
                    <p>レビュー数</p>
                  </td>
                  <td className = "salaries">
                    <p>給与情報数</p>
                  </td>
                  <td className = "follow-btn">
                    <p>フォローする</p>
                  </td>
                </tr>
              </table>
              )
            }
          </div>
        <Footer />
      </body>
    </Fragment>
  )
}
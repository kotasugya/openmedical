import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './companies.css'
import { Link, useHistory } from 'react-router-dom'
import { companiesShow, reviewsShow } from '../../urls/index'
import { ReviewCategoriesIndex } from '../reviewCategories/ReviewCategoriesIndex'

// MaterialUI
import AccountBalanceSharpIcon from '@material-ui/icons/AccountBalanceSharp'
import DoubleArrowSharpIcon from '@material-ui/icons/DoubleArrowSharp'
import CallMadeSharpIcon from '@material-ui/icons/CallMadeSharp'
import EmojiPeopleSharpIcon from '@material-ui/icons/EmojiPeopleSharp'
import ViewAgendaSharpIcon from '@material-ui/icons/ViewAgendaSharp'

const materialUiList = [
  <AccountBalanceSharpIcon />,
  <DoubleArrowSharpIcon />,
  <CallMadeSharpIcon />,
  <EmojiPeopleSharpIcon />,
  <ViewAgendaSharpIcon />,
]

const companyInitialState = {
  company: {
    id: null,
    name: '',
  },
}

export const CompaniesShow = ({ match }) => {
  const [companyInformation, setCompanyInformation] = useState(
    companyInitialState
  )
  const history = useHistory()
  const reviewCategoryList = ReviewCategoriesIndex()
  const handleEnrollment = () => {
    history.push({
      pathname: `/enrollments/new`,
      state: {
        companyId: match.params.id,
      },
    })
  }
  const fetchCompaniesShow = (id) =>
    axios
      .get(companiesShow(id))
      .then((response) => response.data)
      .catch((error) => console.error(error))

  useEffect(() => {
    fetchCompaniesShow(match.params.id).then(
      (data) => setCompanyInformation(data),
      console.log({ companyInformation })
    )
  }, [])

  return (
    <>
      <h2>{companyInformation.company.name}</h2>
      <h4 className="selectCategory">※閲覧したいカテゴリーを選んで下さい</h4>
      <div className="review-categories">
        {reviewCategoryList.review_categories.map((reviewCategory, index) => (
          <div className="categories-name">
            <Link
              to={{
                pathname: `/companies/${
                  companyInformation.company.id
                }/reviewCategories/${index + 1}/reviews`,
                state: {
                  companyInformation: companyInformation,
                },
              }}
            >
              <span className="review-category-icon">
                {materialUiList[index]}
              </span>
              {reviewCategory.name}
              <span className="detail-review-category">詳しく見る</span>
            </Link>
          </div>
        ))}
      </div>
      <button className="reviews-new" onClick={handleEnrollment}>
        この医院のレポートに回答する
      </button>
    </>
  )
}

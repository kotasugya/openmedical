import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { SearchCompanies } from './SearchCompanies'
import BusinessIcon from '@material-ui/icons/Business'

const useStyles = makeStyles(() => ({
  companyList: {
    marginTop: '30px',
    width: '60%',
    margin: '0 auto',
  },
  companyIcon: {
    marginRight: '5px',
  },
  companyItem: {
    padding: '20px 0px 20px 20px',
    border: '1px solid lightGray',
    margin: '0 0 -1px',
    fontSize: 'large',
    fontWeight: 'bold',
  },
  link: {
    textDecoration: 'none',
  },
}))

export const SearchCompanyList = ({ keyword }) => {
  const classes = useStyles()
  const companyList = SearchCompanies(keyword)
  return (
    <>
      <div className={classes.companyList}>
        {companyList.companies.map((company) => (
          <div className={classes.companyItem}>
            <Link className={classes.link} to={`companies/${company.id}`}>
              <BusinessIcon className={classes.companyIcon} />
              {company.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

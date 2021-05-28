import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: '50px',
  },
  footerBar: {
    height: '150px',
    backgroundColor: '#F2F2F2',
  },
  items: {
    paddingTop: '30px',
  },
  title: {
    textAlign: 'center',
    fontSize: '20px',
  },
  menuList: {
    '& ul': {
      display: 'flex',
      justifyContent: 'center',
      listStyle: 'none',
      margin: '20px',
      color: 'gray',
      '& li': {
        fontSize: '14px',
        marginRight: '30px',
        marginLeft: '30px',
      },
    },
  },
  link: {
    color: 'gray',
    textDecoration: 'none',
  },
  copyRight: {
    textAlign: 'center',
    fontSize: '13px',
    color: 'gray',
  },
}))

export const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.footerBar}>
        <div className={classes.items}>
          <div className={classes.title}>openmedical</div>
          <div className={classes.menuList}>
            <ul>
              <Link className={classes.link} to="/">
                <li>HOME</li>
              </Link>
              <li>ABOUT</li>
              <li>お問い合わせ</li>
            </ul>
          </div>
        </div>
        <div className={classes.copyRight}>Copyright © 2021 Sugya.</div>
      </div>
    </div>
  )
}

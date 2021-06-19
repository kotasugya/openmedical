import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { HeaderMenu } from './HeaderMenu'
import { fade, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '  #0077B6',
  },
  menuButton: {
    // marginRight: '5%',
  },
  title: {
    flexGrow: 0.8,
    display: 'none',
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    marginLeft: '15%',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}))

export const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          <Link to="/" className={classes.link}>
            openmedical
          </Link>
        </Typography>
        <HeaderMenu className={classes.menuButton} />
      </Toolbar>
    </AppBar>
  )
}

import React, { useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Context } from '../store'
import { AuthContext } from '../auth/AuthProvider'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  MenuIcon: {
    fontSize: '30px',
    color: 'white',
  },
}))

export const HeaderMenu = () => {
  const classes = useStyles()
  const history = useHistory()
  const { state } = useContext(Context)
  console.log(`state:${state.id}`)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const { logout } = useContext(AuthContext)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleLogout = () => {
    logout()
    history.push('/login')
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleProfile = () => {
    if (state.id) {
      history.push(`/users/${state.id}`)
    }
  }

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon className={classes.MenuIcon} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>プロフィール</MenuItem>
        <MenuItem onClick={handleLogout}>ログアウト</MenuItem>
        <MenuItem onClick={handleClose}>閉じる</MenuItem>
      </Menu>
    </div>
  )
}

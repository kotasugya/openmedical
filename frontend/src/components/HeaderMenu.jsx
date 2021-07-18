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
  // const adminContent = () => {
  //   if (currentUser.email === "admin@admin.com"){
  //     return(
  //       <>
  //         <MenuItem onClick={handleNew}>企業登録</MenuItem>
  //         <MenuItem onClick={handleCategoryNew}>カテゴリー登録</MenuItem>
  //       </>
  //     )
  //   }
  // }
  const { state } = useContext(Context)
  const { logout,currentUser } = useContext(AuthContext)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const classes = useStyles()
  const history = useHistory()
  console.log(`state:${state.id}`)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleLogout = () => {
    logout()
    history.push('/login')
  }

  const handleLogin = () => {
    history.push('/login')
  }

  const handleRegistry = () => {
    history.push('/users')
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleProfile = () => {
    if (state.id) {
      history.push(`/users/${state.id}`)
    } else {
      history.push('/users')
    }
  }
  const handleNew = () => {
    history.push('/companies/admin/new')
  }
  const handleCategoryNew = () => {
    history.push('/review_category/new')
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
        <MenuItem onClick={handleProfile}>プロフィール</MenuItem>
        <MenuItem onClick={handleRegistry}>登録する</MenuItem>
        <MenuItem onClick={handleLogin}>ログイン</MenuItem>
        <MenuItem onClick={handleLogout}>ログアウト</MenuItem>
        <MenuItem onClick={handleClose}>閉じる</MenuItem>
        {/* {currentUser && (
          {adminContent}
        )} */}
        <MenuItem onClick={handleNew}>企業登録</MenuItem>
        <MenuItem onClick={handleCategoryNew}>カテゴリー登録</MenuItem>
      </Menu>
    </div>
  )
}

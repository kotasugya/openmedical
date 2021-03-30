import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  footerBar: {

  },
  title: {

  },
  menu: {

  }
  }));

export const Footer = ()=> {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <div className={classes.footerBar}>
        <div className={classes.title}>
          <div className={classes.menu}>

          </div>
        </div>
      </div>
    </div>
  )
}
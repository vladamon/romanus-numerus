import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import RepeatOneIcon from '@material-ui/icons/RepeatOne'
import Button from '@material-ui/core/Button'

import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

export default function SimpleAppBar () {
  const classes = useStyles()
  const history = useHistory()
  const handleNavigation = (e) => {
    const path = e.currentTarget.id
    history.push(`${path === 'home' ? '/' : path}`)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
            <RepeatOneIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Romanus Numerus
          </Typography>
          <Button id='home' onClick={handleNavigation} color='inherit'>
            Home
          </Button>
          <Button id='about' onClick={handleNavigation} color='inherit'>
            About
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  colors,
} from 'material-ui'
import { withStyles } from 'material-ui/styles'
import MenuIcon from 'material-ui-icons/Menu'
import logo from '../img/ecorp.png'

const { red, blue, deepOrange } = colors

const headerStyles = theme => ({
  primary: red,
  root: {
    width: '100%',
    background: 'red',
    height: 0,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#1C3259',
  },
  photoAvatar: {
    margin: 10,
    color: '#fff',
  },
  snackbar: {
    vertical: 'top',
    horizontal: 'center',
  },
  progress: {
    margin: `0 ${theme.spacing.unit * 2}px`,
    color: deepOrange[500],
  },
  AppBar: {
    backgroundColor: '#000'
  }
})

const ButtonAppBar = (props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.AppBar} >
        <Toolbar>
          <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <img alt="logo" height={60} src={logo} />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(headerStyles)(ButtonAppBar)

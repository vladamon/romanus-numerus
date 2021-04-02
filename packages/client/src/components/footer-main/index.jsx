import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0
  },
  toolbar: {
    justifyContent: 'space-between'
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <AppBar position='fixed' color='primary' className={classes.appBar}>
      <Container maxWidth='md'>
        <Toolbar className={classes.toolbar}>
          <Typography variant='body1' color='inherit'>
            © 2021 Vladimir Cutkovic
          </Typography>
          <Typography variant='body1' color='inherit'>
            MIT Licence
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Footer

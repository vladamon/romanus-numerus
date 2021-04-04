import { Grid, Box, Container } from '@material-ui/core'
import { Intro, Entry, Details, Result } from '../components/home'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'justify'
  },
  control: {
    padding: theme.spacing(2)
  },
  gridItem: {
    minHeight: 300
  }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <Box mt={3}>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Intro />
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={classes.gridItem}>
            <Entry />
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={classes.gridItem}>
            <Result />
          </Grid>
          <Grid item xs={12}>
            <Details sx={{ height: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Home

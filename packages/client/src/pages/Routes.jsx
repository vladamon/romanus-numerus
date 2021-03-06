import { BrowserRouter as Router, Switch } from 'react-router-dom'

import Home from './Home'
import About from './About'
import MainLayout from '../layouts/MainLayout'
import AppLayout from '../layouts/AppLayout'

const RoutedComponent = () => {
  return (
    <Router>
      <Switch>
        <AppLayout exact path='/' component={Home} layout={MainLayout} />
        <AppLayout exact path='/about' component={About} layout={MainLayout} />
      </Switch>
    </Router>
  )
}

export default RoutedComponent

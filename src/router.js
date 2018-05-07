import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './pages/App/App'
import Heading from './components/Heading/Heading'
import routes from './routes'

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => (
      // pass the sub-routes down  to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
)

const RouteConfig = () => (
    <Router>
      <App>
        <Heading />
        <Switch>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </Switch>
      </App>
    </Router>
)

export default RouteConfig

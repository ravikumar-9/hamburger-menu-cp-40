import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import NotFound from './components/NotFound'

import About from './components/About'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App

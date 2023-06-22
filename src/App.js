import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import CourseDetails from './components/CourseDetails'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CourseDetails} />
      <Route path="/bad-path" component={NotFound} />
      <Redirect to="bad-path" />
    </Switch>
  </BrowserRouter>
)

export default App

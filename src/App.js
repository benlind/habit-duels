import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home.js'
import Duels from './Duels.js'
import HabitNav from './HabitNav.js'

import './App.css'

const App = () => (
  <Router>
    <div>
      <HabitNav/>

      <Route exact path="/" component={Home}/>
      <Route path="/duels" component={Duels}/>
    </div>
  </Router>
)

export default App

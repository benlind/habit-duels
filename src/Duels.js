import React from 'react'
import { Route, Link } from 'react-router-dom'

import Duel from './Duel.js'

const Duels = ({ match }) => (
  <div>
    <h2>Your Duels</h2>
    <ul>
      <li>
        <Link to={`${match.url}/1`}>Get up Early</Link>
      </li>
      <li>
        <Link to={`${match.url}/2`}>Exercise</Link>
      </li>
      <li>
        <Link to={`${match.url}/3`}>ARK</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:duelId`} component={Duel}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a duel.</h3>
    )}/>
  </div>
)

export default Duels

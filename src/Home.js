import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <Link to="/duels">Your Duels</Link>
    <Link to="/new">Start a Duel</Link>
    <Link to="/friends">Friends</Link>
    <Link to="/preferences">Preferences</Link>
  </div>
)

export default Home

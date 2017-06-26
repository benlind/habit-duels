import React from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

import './Home.css'

const Home = () => (
  <div>
    <LinkContainer to="/duels">
      <Button>Your Duels</Button>
    </LinkContainer>
    <LinkContainer to="/new">
      <Button>Start a Duel</Button>
    </LinkContainer>
    <LinkContainer to="/friends">
      <Button>Friends</Button>
    </LinkContainer>
    <LinkContainer to="/preferences">
      <Button>Preferences</Button>
    </LinkContainer>
  </div>
)

export default Home

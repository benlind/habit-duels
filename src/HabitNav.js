import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const HabitNav = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Habit Duels</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/" exact="true">
          <NavItem>Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/duels">
          <NavItem>Duels</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)


  // <ul>
  //   <li><Link to="/">Home</Link></li>
  //   <li><Link to="/duels">Duels</Link></li>
  // </ul>


export default HabitNav

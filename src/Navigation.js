import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


class Navigation extends Component {
  render() {
    return (
      <Navbar className="navbar navbar-inverse">
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink exact activeClassName="active" to="/">UNAFB</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="nav navbar-nav">
            <NavItem eventKey={1} href="/mybudget">
              My Budget
            </NavItem>
            <NavItem eventKey={2} href="/calendar">
              Calendar
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/login">
              Login
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>);
  }
}

export default Navigation;

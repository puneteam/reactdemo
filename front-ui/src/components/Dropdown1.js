import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
export default class Dropdown1 extends Component {
  render() {
    return (
      <div>
     <Navbar  navbar navbar-expand-lg bg-light navbar-light>
  <Container>
  <Dropdown className="d-inline mx-2">
    <Dropdown.Toggle id="dropdown-autoclose-true">
      Employee
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="/employees">Add</Dropdown.Item>
      <Dropdown.Item href="view-employee/:id">View</Dropdown.Item>
     
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown className="d-inline mx-2" autoClose="true">
    <Dropdown.Toggle id="dropdown-autoclose-inside">
      Teacher
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="/teachers">Add</Dropdown.Item>
      <Dropdown.Item href="view-teacher/:id">View</Dropdown.Item>
      
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown className="d-inline mx-2" autoClose="outside">
    <Dropdown.Toggle id="dropdown-autoclose-outside">
      Login
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item href="/login">SignIn</Dropdown.Item>
      
      
    </Dropdown.Menu>

    
  </Dropdown>

  
  
        

  </Container>
</Navbar>
  

      </div>
    )
  }
}

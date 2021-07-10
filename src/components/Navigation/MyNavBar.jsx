import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function MyNavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Jason Rosas Ramirez</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="ml-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >

      {/* This is where the links come in :D */}
      {/* About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted - from readme*/}
      <Nav.Link href="#about">About Me</Nav.Link> {/* id link is placed in aboutMe.jsx*/}
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
      <Nav.Link href="#action4">Resume</Nav.Link>
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>            
        </div>
    )
}


/* exporting */
export default MyNavBar // will be referenced by ../App.js


import React from 'react'
import {Navbar,Nav,NavDropdown}from 'react-bootstrap'
import '../App.css'
import Logo1 from '../assets/search.png'
import Logo2 from '../assets/cal.png'
import Logo3 from '../assets/cart.jpg'
import Logo4 from '../assets/user2.jpg'
export default function Head() {
    return (
        <div className="panel">
        <Navbar collapseOnSelect expand="lg" >
  <Navbar.Brand href="#home"> <h3> Bodywise</h3></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{background:"white",width:"20%"}}/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto"  >
      <Nav.Link href="#features" style={{color:"white"}}>Shop</Nav.Link>
      <Nav.Link href="#pricing" style={{color:"white"}}>Take Self-Assessment</Nav.Link>
      <NavDropdown title="Choose concers"  id="collasible-nav-dropdown" >
        
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
       
      </NavDropdown>
      <Nav.Link href="#features" style={{color:"white"}}>All Products</Nav.Link>
      <Nav.Link href="#pricing" style={{color:"white"}}>Book Consultation</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets"><img src={Logo1} alt=""/></Nav.Link>
      <Nav.Link href="#deets"><img src={Logo2} alt=""/></Nav.Link>
      <Nav.Link href="#deets"><img src={Logo4}  alt=""/></Nav.Link>
      <Nav.Link href="#deets"><img src={Logo3} alt=""/></Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

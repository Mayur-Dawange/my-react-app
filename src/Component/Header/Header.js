import React from "react";
import "./Header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

// import { BrowserRouter, Route, Routes } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="main-navbar" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="color-scss text-white">
            <img src="" alt="" className="" />
            My React App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-white">
              <NavLink to="/" className="text-white nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="text-white nav-link">
                About
              </NavLink>
              <NavLink to="service" className="text-white nav-link">
                Services
              </NavLink>
              <NavLink to="/contact" className="text-white nav-link">
                Contact
              </NavLink>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown nav-links">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

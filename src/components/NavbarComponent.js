import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
//useContext
import { useAuthDispatch, logout } from "../context";
import { getCurrentUser } from "../services/auth.services";

import navbarLogo from "../assets/logo_full.png";

const NavbarComponent = () => {
  //useContext Functions
  const dispatch = useAuthDispatch();
  const handleLogout = () => {
    logout(dispatch);
    window.location.reload();
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="mt-1"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={navbarLogo}
            width="100"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="mr-auto">
            {getCurrentUser() ? (
              <>
                <Nav.Link href="/view_reports">Reports</Nav.Link>
                <Nav.Link href="/offers">Offers</Nav.Link>
                <Nav.Link href="/payments">Payments</Nav.Link>
                <Nav.Link href="/settings">Settings</Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
